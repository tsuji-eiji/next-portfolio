import Header from "../component/Header";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  let meta = {};
  meta.title = "Profile - TECH 24";

  return meta;
}

export default async function StaticPage() {
  const birthday = {
    year: 1990,
    month: 4,
    date: 24,
  };

  // 年齢を算出
  const today = new Date();
  const thisYearsBirthday = new Date(
    today.getFullYear(),
    birthday.month - 1,
    birthday.date
  );

  let age = today.getFullYear() - birthday.year;
  // 今年まだ誕生日が来ていない場合
  if (today < thisYearsBirthday) {
    age--;
  }

  return (
    <>
      <Header />
      <main className="container m-auto p-4 profile-detail">
        <h2 className="text-center text-3xl my-2">Profile</h2>
        <div className="profile-img relative aspect-square m-auto">
          <Image
            src={"/profile.png"}
            layout="fill"
            className="object-contain"
          />
        </div>
        <dl className="my-4 mx-auto w-2/3 lg:w-1/3">
          <dt>名前</dt>
          <dd>ツジ エイジ</dd>
          <dt>年齢</dt>
          <dd>{age}歳</dd>
          <dt>趣味</dt>
          <dd>
            <ul>
              <li>ゲーム</li>
              <li>プロレス観戦</li>
              <li>ギター・ベース演奏</li>
            </ul>
          </dd>
        </dl>
        <div className="text-center my-8">
          <Link href={'/'}>TOPへ</Link>
        </div>
      </main>
    </>
  );
}
