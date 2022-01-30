import Head from "next/head"
import A from "./A"

export const MainContainer = ({children, keywords, title}) => {
  return (
    <>
    <Head>
      <meta keywords={"nextjs atph" + keywords}></meta>
      <title>{title}</title>
    </Head>
    <div className="navbar">
      <A href={'/'} text="Главная" />
      <A href={'/users'} text="Пользователи" />
    </div>
    <div>
      {children}
    </div>
    <style jsx>
      {`
      .navbar {
        background: orange;
        padding: 15px;
      }
      `}
      
    </style>
    </>
  )
}