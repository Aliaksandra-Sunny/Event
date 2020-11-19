import React from 'react';
import style from './Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = (props) => {
    return (
        <div className={style.footer}>
            <div>
                <p className={style.text}>Следи за нашими обновлениями в социальных сетях</p>
                <div className={style.socialNetworks}>
                    <div>
                        <InstagramIcon/>
                    </div>
                    <div><YouTubeIcon/></div>
                    <div><TelegramIcon/></div>
                    <div>
                        <TwitterIcon/>
                    </div>
                </div>

            </div>
            <div>
                <p className={style.text}>Напиши нам, если возникли вопросы</p>
                <p className={style.telephone}> +375 33 345 34 34</p>
            </div>
        </div>
    )
};

export default Footer;