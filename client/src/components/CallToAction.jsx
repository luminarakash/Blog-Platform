import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Projects?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Projects
            </p>
            <div className='flex flex-col space-y-4'> {/* Vertically arrange buttons with space */}
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://github.com/luminarakash" target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </a>
                </Button>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://www.linkedin.com/in/luminarakash/" target='_blank' rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                </Button>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://www.instagram.com/luminarakash/" target='_blank' rel='noopener noreferrer'>
                        Instagram
                    </a>
                </Button>   
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://www.youtube.com/channel/UC7eM8z3aAj2RAw2qhjbTaYA" target='_blank' rel='noopener noreferrer'>
                        Youtube
                    </a>
                </Button>
            </div>

        </div>
        <div className="p-7 flex-1">
    <img 
        src="https://i.pinimg.com/736x/ef/70/32/ef70325f71e3c05dd5a9f89ad6616c10.jpg" 
        width="480" 
        height="280" 
        alt="Image Description"
    />
</div>
    </div>
  )
}