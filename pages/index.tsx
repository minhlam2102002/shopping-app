import type { NextPage } from 'next'
import Home from '../components/Home'
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Page