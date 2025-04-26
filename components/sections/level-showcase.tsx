"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import levelsData from "@/data/levels";
import { type Locale } from "@/i18n";
import { cn, getYouTubeVideoId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// 基于 levels.ts 定义单个关卡的结构
interface LevelData {
  id: number;
  videoTitle: string;
  videoUrl: string;
  imgUrl?: string;
}

// 定义字典部分的预期结构
export interface LevelShowcaseDictionary {
  title: string;
  nav: {
    featured: string;
    rangePrefix: string; // 例如: "Level " 或 "第 "
    rangeSuffix: string; // 例如: "" 或 " 关"
  };
  card: {
    titlePrefix: string; // 例如: "Dreamy Room Level "
  };
  showMoreButton: string;
  noLevelsFound: string;
  searchPlaceholder: string; // 搜索占位符
  searchNoResultsFound: string; // 搜索无结果时的消息 (例如: "未找到匹配 "{query}" 的关卡。")
}

// 定义组件的 props
interface LevelShowcaseProps {
  lang: Locale;
  levelShowcaseDict: LevelShowcaseDictionary; // 添加字典 prop
}

const INITIAL_FEATURED_COUNT = 10; // 初始显示前 2 行，每行 5 个

// 定义关卡范围 (仅 ID，文本动态生成)
const levelRangeDefinitions = [
  { start: 1, end: 10 },
  { start: 11, end: 20 },
  { start: 21, end: 30 },
  { start: 31, end: 40 },
  { start: 41, end: 50 },
  { start: 51, end: 60 },
  { start: 61, end: 70 },
  { start: 71, end: 80 },
  { start: 81, end: 89 },
];

export function LevelShowcase({ lang, levelShowcaseDict }: LevelShowcaseProps) {
  // 提前检查是否提供了字典
  if (!levelShowcaseDict?.nav?.featured) {
    console.error(
      "LevelShowcase dictionary or featured nav text not provided!"
    );
    return null;
  }

  // 基于字典动态生成导航按钮标签
  const levelRanges = [
    levelShowcaseDict.nav.featured,
    ...levelRangeDefinitions.map(
      (range) =>
        `${levelShowcaseDict.nav.rangePrefix}${range.start}-${range.end}${levelShowcaseDict.nav.rangeSuffix}`
    ),
  ];

  // 使用翻译后的精选标签初始化状态
  const [selectedRange, setSelectedRange] = useState(
    levelShowcaseDict.nav.featured
  );
  const [featuredExpanded, setFeaturedExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize 过滤逻辑
  const filteredLevels = useMemo(() => {
    let levels = levelsData; // 从所有数据开始

    // 1. 按选定范围过滤 (除非正在搜索)
    if (selectedRange !== levelShowcaseDict.nav.featured) {
      const selectedRangeDef = levelRangeDefinitions.find(
        (range) =>
          `${levelShowcaseDict.nav.rangePrefix}${range.start}-${range.end}${levelShowcaseDict.nav.rangeSuffix}` ===
          selectedRange
      );

      if (selectedRangeDef) {
        levels = levelsData.filter(
          (level) =>
            level.id >= selectedRangeDef.start &&
            level.id <= selectedRangeDef.end
        );
      } else {
        levels = []; // 如果标签匹配，则不应发生，但这是良好的实践
      }
    }

    // 2. 按搜索查询过滤 (如果有) - 在范围过滤之后应用
    if (searchQuery.trim() !== "") {
      const lowerCaseQuery = searchQuery.toLowerCase();
      levels = levels.filter(
        (level) =>
          level.id.toString().includes(lowerCaseQuery) || // 检查 ID (作为字符串)
          level.videoTitle.toLowerCase().includes(lowerCaseQuery) // 检查标题
      );
    }

    return levels;
  }, [selectedRange, searchQuery, levelShowcaseDict]); // 将 searchQuery 添加到依赖项

  // 确定"显示更多"按钮是否可见
  // 如果正在搜索则隐藏
  const shouldShowMoreButton =
    !searchQuery && // 如果正在搜索则隐藏
    selectedRange === levelShowcaseDict.nav.featured &&
    !featuredExpanded &&
    filteredLevels.length > INITIAL_FEATURED_COUNT; // 检查过滤后的关卡数量是否超过初始显示数量

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* 使用字典标题 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {levelShowcaseDict.title}
      </h2>

      {/* 搜索输入框 */}
      <div className="mb-8 max-w-md mx-auto">
        <Input
          type="text"
          placeholder={levelShowcaseDict.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* 导航按钮 */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {/* 使用动态生成的标签 */}
        {levelRanges.map((rangeLabel) => (
          <button
            key={rangeLabel}
            onClick={() => {
              setSelectedRange(rangeLabel);
              // 如果将范围更改为非精选，则重置展开状态
              if (rangeLabel !== levelShowcaseDict.nav.featured) {
                setFeaturedExpanded(false);
              }
              // 可选：更改范围时重置搜索查询？
              // setSearchQuery("");
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedRange === rangeLabel
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            )}
          >
            {rangeLabel}
          </button>
        ))}
      </div>

      {/* 关卡网格 - 始终渲染 filteredLevels */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {filteredLevels.map((level, index) => (
          <Link
            key={level.id}
            href={`/${lang}/level/${level.id}`}
            className={cn(
              "group block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
              // 当在 "Featured" 标签页、未展开、未搜索且索引超出初始数量时，添加 'hidden' 类
              selectedRange === levelShowcaseDict.nav.featured &&
                !featuredExpanded &&
                !searchQuery &&
                index >= INITIAL_FEATURED_COUNT &&
                "hidden" // 使用 Tailwind 的 'hidden' 类来隐藏元素但保留在 DOM 中
            )}
          >
            <div className="relative aspect-square">
              <Image
                src={
                  level.imgUrl ||
                  `https://img.youtube.com/vi/${getYouTubeVideoId(
                    level.videoUrl
                  )}/maxresdefault.jpg`
                }
                alt={`${levelShowcaseDict.card.titlePrefix}${level.id} - ${level.videoTitle}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                priority={
                  // 优先加载精选选项卡中最初可见的图像（在潜在扩展或搜索之前）
                  selectedRange === levelShowcaseDict.nav.featured &&
                  !searchQuery &&
                  !featuredExpanded &&
                  index < INITIAL_FEATURED_COUNT
                } // 优先级逻辑保持不变
              />
              <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                Level {level.id}
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 truncate">
                {levelShowcaseDict.card.titlePrefix}
                {level.id}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* 显示更多按钮 */}
      {shouldShowMoreButton && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setFeaturedExpanded(true)} // 更新展开状态
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {/* 使用字典按钮文本 */}
            {levelShowcaseDict.showMoreButton}
          </Button>
        </div>
      )}

      {/* 未找到关卡消息 - 已更新 */}
      {filteredLevels.length === 0 && ( // 直接检查 filteredLevels 的长度
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          {searchQuery // 如果搜索没有结果，显示不同的消息
            ? levelShowcaseDict.searchNoResultsFound.replace(
                "{query}",
                searchQuery
              ) // 使用字典并替换占位符
            : levelShowcaseDict.noLevelsFound}
        </p>
      )}
    </section>
  );
}
