'use client';
import Image from "next/image";

export default function StaticPage() {

  // 検索実行前にワードが空ならクエリパラメータを消す
  function beforeSubmit() {
    const input = document.getElementsByName('q')[0];
    if (input.value === '') {
      input.remove();
    }
  }

  // テキストボックスに入力がある度にhiddenに持ち直す
  function inputChange() {
    const input = document.getElementById('q').value;
    document.getElementsByName('q')[0].value = input;
  }

  return (
    <div className="area-border">
      <form className="word-search-form" method='get' action='/' onSubmit={beforeSubmit}>
        <h2 className="text-center">ワード検索</h2>
        <input id="q" onChange={inputChange} type="text" />
        <input name="q" type="hidden" />
        <button className="search-icon">
          <Image src={'/search.svg'} width={24} height={24} alt="検索ボタン" />
        </button>
      </form>
    </div>
  );
}