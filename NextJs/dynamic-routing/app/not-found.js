import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='font-bold '>Not Found</h2>
      <p className='text-gray-500'>Could not find requested resource</p>
      <Link className='text-blue-600 hover:underline' href="/">Return Home</Link>
    </div>
  )
}