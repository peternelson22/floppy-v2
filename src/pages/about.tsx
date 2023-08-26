const About = () => {
  return (
    <div className='min-h-[calc(100vh-17rem)]'>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-info shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Floppy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
        odit, officiis eos mollitia alias, doloremque, aspernatur ratione
        asperiores voluptas labore minus dolores reprehenderit corporis quos.
        Assumenda molestias harum dignissimos?
      </p>
    </div>
  );
};
export default About;
