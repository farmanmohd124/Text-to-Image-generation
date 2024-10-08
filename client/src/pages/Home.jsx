import React, { useState, useEffect } from 'react';
import { Loader, FormField, Card } from '../components'; // Ensure these components are correctly defined and exported

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText]= useState('')

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The community showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quod enim mollitia, beatae eos nisi perferendis vero, nihil aliquid, doloremque doloribus aspernatur suscipit numquam voluptate laboriosam magnam necessitatibus earum cupiditate hic tempora harum placeat temporibus. Dignissimos dicta laboriosam quae repellendus animi culpa corrupti distinctio, similique eligendi. Necessitatibus illo temporibus ipsam.
        </p>
      </div>

      <div className="mt-16">
         <FormField />
      </div>

      <div className='mt-10'>
     {loading ? (
      <div className=' flex justify-center items-center'>
         <Loader/>
      </div>
     ) :(
       <>
           {searchText && (
           <h2 className='font-medium text-[#666e75] text-xl mb-3'>
       Showing results for <span className='text-[#222328'>{searchText} </span>
           </h2>
          )}
                  <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No Posts Yet"
                />
              )}
            </div>
       </>
)         }
      </div>
    </section>
  );
};

export default Home;
