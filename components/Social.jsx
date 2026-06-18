import Link from "next/link"
import { FaGithub, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/dinga03377'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/dinga.robert?igsh=ODhiOGM5a292b3o2'},
    {icon: <FaYoutube/>, path: 'https://youtube.com/@dingarobert?si=fGjl19k5TRMfvyfh'},
    {icon: <FaTwitter/>, path: 'https://x.com/Dinga0337'},
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/share/18h5sZeLK6'},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>{item.icon}</a>
      })}
    </div>
  )
}

export default Social
