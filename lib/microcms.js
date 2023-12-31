import { createClient } from "microcms-js-sdk";

// クライアントを作成
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
  customFetch: (input, init) => {
    if (typeof input === 'string') {
      const newInput = new URL(input)
      const time = new Date()
      newInput.searchParams.set('cacheclearparam', `${time.getMinutes()}`)
      return fetch(newInput.href, init)
    }
    return fetch(input, init)
  },
});

// ブログ一覧を取得
export const getList = async (queries) => {

  const listData = await client.getList({
    endpoint: "blogs",
    queries: {
      q: queries.q,
      offset: queries.p - 1,
      filters: queries.filters,
      limit: 5
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// すべてのブログ記事を取得
export const getAllBlogs = async () => {

  const listData = await client.getAllContents({
    endpoint: "blogs",
  });

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (contentId) => {
  const detailData = await client.getListDetail({
    endpoint: "blogs",
    contentId: contentId,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
}

// カテゴリ一覧を取得
export const getCategories = async (queries) => {
  const categories = await client.getAllContents({
    endpoint: "categories",
    queries: {
      orders: 'ganre' 
    }
  });

  return categories;
};

// カテゴリ一覧を取得
export const getCategoryDetail = async (contentId) => {
  const detailData = await client.getListDetail({
    endpoint: "categories",
    contentId: contentId,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};

// すべてのブログ記事を取得
export const getArchives = async (queries) => {

  const listData = await client.getList({
    endpoint: "blogs",
    queries: queries,
  });

  return listData;
};