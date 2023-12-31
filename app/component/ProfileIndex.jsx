import Image from "next/image";
import Link from "next/link";

export default async function StaticPage() {
  return (
    <div className="area-border">
      <h2 className="menu-header">Profile</h2>
      <div>
        <Image
          src={"/profile.png"}
          width={250}
          height={250}
          className="mx-auto"
          alt="プロフィール画像"
        />
      </div>
      <p>1990年4月24日生まれ。大阪市内在住のエンジニア。より詳しいプロフィールは<Link className="profile-link" href={'/profile'}>こちら</Link></p>
    </div>
  );
}
