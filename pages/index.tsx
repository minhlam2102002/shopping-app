import type { NextPage } from 'next'
import Home from '../components/Home'
import styles from '../styles/Home.module.scss'
// import prisma from '../lib/prisma';
// import { GetStaticProps } from 'next'
const Page: NextPage = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Page

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };
