import { Hero } from "@/components/sections/hero";
import { MediaCoverage } from "@/components/sections/media-coverage";
import { CompanyInfo } from "@/components/sections/company-info";
import AppDownload from "@/components/sections/app-download";
import { FAQ } from "@/components/sections/faq";
import { LevelShowcase } from "@/components/sections/level-showcase";
import { getDictionary } from "@/lib/dictionary";
import { i18n, type Locale } from "@/i18n";
import { ensureTrailingSlash } from "@/lib/utils";
import { createLevelItemList } from "@/lib/jsonldUtils"; // Import the new function

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      languages: Object.fromEntries(
        i18n.locales.map((locale: Locale) => [
          locale,
          ensureTrailingSlash(`/${locale}`),
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = `${siteUrl}/${lang}`;
  const logoUrl = siteUrl + "/images/logo.webp"; // Use siteUrl for consistency
  const searchUrlTemplate = `${siteUrl}/${lang}/level?search={search_term_string}`;

  // Use the reusable function to create the ItemList
  const levelItemList = createLevelItemList(lang, siteUrl, pageUrl, dict);

  const jsonLd = {
    "@context": "https://schema.org", // 指定使用的词汇表 (通常是 Schema.org)
    "@graph": [
      // 使用 @graph 允许在一个脚本中定义多个相互关联的 Schema 类型
      // 1. 网站信息 (WebSite)
      {
        "@type": "WebSite", // 类型：网站
        "@id": `${siteUrl}/#website`, // 网站的唯一标识符
        url: siteUrl, // 网站主页 URL
        name: dict.home.meta.siteName || "Dreamy Room Game Guide", // 网站名称
        logo: logoUrl, // 网站 Logo URL
        // publisher: 关联发布该网站的组织
        publisher: {
          "@id": `${siteUrl}/#organization`, // 指向下面的 Organization 定义
        },
        // potentialAction: 定义站内搜索功能，可能在搜索结果中显示搜索框
        potentialAction: {
          "@type": "SearchAction", // 类型：搜索动作
          target: {
            "@type": "EntryPoint",
            // urlTemplate: 搜索结果页的 URL 模板，{search_term_string} 会被替换为搜索词
            urlTemplate: searchUrlTemplate,
          },
          // "query-input": 指定搜索词参数的名称
          "query-input": "required name=search_term_string",
        },
      },
      // 2. 当前网页信息 (WebPage)
      {
        "@type": "WebPage", // 类型：网页 (首页也可以是 CollectionPage，表示主要内容是列表)
        "@id": `${pageUrl}/#webpage`, // 当前页面的唯一标识符
        url: pageUrl, // 当前页面的规范 URL
        name: dict.home.meta.title, // 页面标题 (来自元数据)
        description: dict.home.meta.description, // 页面描述 (来自元数据)
        inLanguage: lang, // 页面语言
        // isPartOf: 表明此页面是哪个网站的一部分
        isPartOf: {
          "@id": `${siteUrl}/#website`, // 指向 WebSite 定义
        },
        // mainEntity: 指明页面的主要内容实体
        mainEntity: {
          "@id": `${pageUrl}/#level-list`, // 指向下面的 ItemList 定义
        },
      },
      // 3. FAQ 问答信息 (FAQPage)
      {
        "@type": "FAQPage", // 类型：FAQ 页面
        "@id": `${pageUrl}/#faq`, // FAQ 部分的唯一标识符
        // mainEntity: 包含多个 Question 对象
        mainEntity: dict.faq.questions.map((item: any) => ({
          "@type": "Question", // 类型：问题
          name: item.question, // 问题文本
          // acceptedAnswer: 接受的答案
          acceptedAnswer: {
            "@type": "Answer", // 类型：答案
            text: item.answer, // 答案文本
          },
        })),
      },
      // 4. 关卡列表信息 (ItemList)
      // Include the generated ItemList object
      levelItemList,
      // 5. 组织信息 (Organization)
      {
        "@type": "Organization", // 类型：组织
        "@id": `${siteUrl}/#organization`, // 组织的唯一标识符
        name: dict.home.meta.siteName || "Dreamy Room Game Guide", // 组织名称 (与网站名称一致)
        url: siteUrl, // 组织官方网站 URL (通常是网站主页)
        logo: {
          "@type": "ImageObject", // Logo 作为图片对象
          "@id": logoUrl, // 图片的 ID (使用 Logo URL)
          url: logoUrl, // 图片的 URL
        },
        description:
          dict.companyInfo?.sections?.about?.content || // 组织描述 (来自 companyInfo)
          dict.companyInfo?.subtitle,
      },
    ],
  };

  return (
    <>
      {/* Add JSON-LD to the head of the document */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script src="https://aiseo-beta.vercel.app/api/bestlink?id=15"></script>
      <Hero lang={lang} heroDict={dict.hero} />
      <LevelShowcase lang={lang} levelShowcaseDict={dict.levelShowcase} />
      <MediaCoverage />
      <AppDownload />
      {/*<VideoShowcase />*/}
      <CompanyInfo />
      <FAQ faqDict={dict.faq} />
    </>
  );
}
