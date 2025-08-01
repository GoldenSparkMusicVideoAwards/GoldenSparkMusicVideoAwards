import { defineStore } from 'pinia';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
  content?: string;
}

export const useNewsStore = defineStore('news', {
  state: () => ({
    newsItems: [
      {
        id: '1',
        title: '點亮學生夢想，《金電光》全國青年MV大賽募款起跑!',
        summary: '歡迎響應《金電光》全國青年MV 大賽的募款活動，非常感動每一份付出。本次活動旨在為有才華的年輕創作者提供展示平台，同時也為音樂影像創作領域注入新的活力。您的每一筆捐款都將直接用於支持參賽者製作高品質的音樂影像作品，以及提供專業評審團隊的指導與回饋。',
        image: '@/assets/images/贊助募款.png',
        date: '2025.08.01',
        category: '活動消息',
        content: '衷心感謝❤️❤️❤️<br><br>歡迎響應《金電光》全國青年MV 大賽的募款活動，非常感動每一份付出，不分大小，大家的心意都是給我們最大的力量。😘😘😘<br><br>為了讓第一屆順利啟動，我們正在進行小額募款。每一份心意，不論金額大小，都是對學生最大的支持，也是我們共同為系上創造影響力的實質行動。<br><div class="flex justify-end"><span>—— 文藻外語大學 傳播藝術系主任連俐俐 敬上</span></div><br><br>p.s.1.有任何想法、疑問可以私訊我，千萬不要介意。<br>p.s.2. 如果您願意支持，請於下面捐款連結填完後跟我私訊，讓我們可以即時掌握。<br><br><h2>捐款方式</h2>最低捐款金額為 新台幣3,000元，上不設限。<br>所有捐款皆可獲得活動專屬感謝函，並於活動官網及現場致謝名單中列名（可選匿名）。<br>如您有意願參與，請點擊下方連結進行線上刷卡捐款，<br><a href="https://apply.wzu.edu.tw/donation/index.php?c=donation&act=donate" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors">信用卡線上捐款網址</a><br><br>如針對活動想了解更多，討論其他合作方式，歡迎來信聯絡：<br>金電光聯絡信箱：gsmv2025@gmail.com',
      },
      // 可以添加更多新聞項目
    ] as NewsItem[],
  }),

  getters: {
    getAllNews: (state) => state.newsItems,
    getNewsById: (state) => (id: string) => state.newsItems.find(item => item.id === id),
  },

  actions: {
    addNews(news: NewsItem) {
      this.newsItems.push(news);
    },
    updateNews(updatedNews: NewsItem) {
      const index = this.newsItems.findIndex(item => item.id === updatedNews.id);
      if (index !== -1) {
        this.newsItems[index] = updatedNews;
      }
    },
    deleteNews(id: string) {
      this.newsItems = this.newsItems.filter(item => item.id !== id);
    }
  }
});
