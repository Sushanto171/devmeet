"use client"
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


const ThemeToggle = () => {

  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  // if(!mounted) return null
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-200 dark:bg-gray-700 p-1 rounded-full cursor-pointer "
    >
      {theme === 'dark' ? <Moon/> : <Sun/>} 
    </button>
  )
};

export default ThemeToggle;