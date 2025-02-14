import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2);
  const [width, setWidth] = useState(144);
  const [height, setHeight] = useState(58);
  const [text, setText] = useState('NO');
  const [stickerHeight , setStickerHeight] = useState(50);

  const [yes, setYes] = useState(false);

  const handleYes = () => {
    setYes(true);
  }

  const handleNo = () => {
    setCount(prevVal => (prevVal+1));
    setWidth(count * 144);
    setHeight(count * 58);
    console.log(count);
    
    switch(count){
      case 2:
        setText('Are you sure?');
        setStickerHeight(50);
      break;
      case 3:
        setText('Really sure?');
        setStickerHeight(45);
      break;
      case 4:
        setText('Please... :(');
        setHeight(300);
        setWidth(800);
        setStickerHeight(35);
      break;
      case 5:
        setText('Just think about it.');
        setHeight(400);
        setWidth(1000);
        setStickerHeight(30);
      break;
      case 6:
        setText('If you say no. I will be sad :(');
        setHeight(550);
        setWidth(1200);
        setStickerHeight(20);
      break;
      case 7:
        setText('I will be very sad :((');
        setHeight(700);
        setWidth(1500);
        setStickerHeight(10);
      break;
      case 8:
        setText('I will be very very sad :((');
        setHeight(1100);
        setWidth(2000);
        setStickerHeight(5);
      break;
      case 9:
        setText('I will be very very very sad :((');
        setHeight(1500);
        setWidth(2500);
        setStickerHeight(0);
      break;

      default:
    }
  }

  return (
    <>
      { !yes ?
        <div className='w-screen h-screen overflow-hidden bg-pink-500/50'>
          <div style={{ height: `${100 - stickerHeight}%` }} className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-pink-800 text-xl font-bold'>Will you be my Valentine?</h1>
            <div className='mt-10 w-full flex flex-col justify-center items-center gap-y-5'>
              <button type='button' onClick={handleYes} style={{width: `${width}px`, height: `${height}px`, fontSize: `${count * 10}px` }} className='border py-3 w-36 rounded-lg text-2xl tracking-wider cursor-pointer bg-green-600 text-gray-200 border-green-700 shadow-lg font-bold z-[99]'>
                YES
              </button>
              <button type='button' onClick={handleNo} className='border min-w-[144px] px-2 h-[58px] rounded-lg text-xl tracking-wider cursor-pointer bg-red-500 text-gray-200 border-red-700 shadow-lg font-bold hover:scale-105 z-[90]'>
                {text}
              </button>
            </div>
          </div>
          <div style={{ height: `${stickerHeight}%` }} className='w-full h-1/2 flex items-center justify-center'>
            <img src="/src/assets/Sticker.gif" alt="Animated GIF" className='h-full min-h-[170px]' />
          </div>
        </div>
       :
        <div className='w-screen h-screen overflow-hidden bg-pink-500/50'>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <h1 className='text-pink-600 text-2xl font-bold'>Knew you would say YES</h1>
            <img src="/src/assets/Sticker2.gif" alt="Animated GIF" className='h-full min-h-[170px] max-h-[400px]' />
          </div>
        </div>
       }
    </>
  )
}

export default App
