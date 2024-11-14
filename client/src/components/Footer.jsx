import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin, BsCake, BsCode, BsYoutube } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 '>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Akash's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/luminarakash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Akash's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/luminarakash'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Akash's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/luminarakash?mibextid=JRoKGi' icon={BsFacebook}/>
            <Footer.Icon href='https://instagram.com/luminarakash?igshid=NzZlODBkYWE4Ng==' icon={BsInstagram}/>
            <Footer.Icon href='https://x.com/luminarakash?t=GjnShWyKef0RV386aYAp5g&s=35' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/luminarakash' icon={BsGithub}/>
            <Footer.Icon href='https://www.linkedin.com/in/luminarakash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' icon={BsLinkedin}/>
            <Footer.Icon href='https://www.geeksforgeeks.org/user/apt0209/' icon={BsCode}/>
            <Footer.Icon href='https://www.youtube.com/channel/UC7eM8z3aAj2RAw2qhjbTaYA' icon={BsYoutube}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
