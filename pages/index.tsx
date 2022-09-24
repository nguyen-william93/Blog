import type { NextPage } from 'next'
import Head from 'next/head'
import {PostCard, Category, PostWidget} from '../components'

const posts=[
  {
    title:"React Testing", excerpt:'Learn React Testing'
  },
  {
    title: 'React with tailwind', excerpt:'Learn React with tailwind'
  }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post , index) => ( <PostCard post={post} key={post.title} />))}
        </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          <PostWidget />
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Home