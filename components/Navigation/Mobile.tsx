import React, { useState } from 'react';
import FancyLink from '../FancyLink';

const Mobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const OnNavigateClick = (event) => {
        if (event.target.classList.contains('c-header__mobile-contact')) {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            setIsMenuOpen(false);
        } else if (!isMenuOpen) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            setIsMenuOpen(true);
        } else {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <FancyLink
                destination="/contact"
                a11yText="Contact"
                extraClasses={isMenuOpen ? 'c-header__mobile-contact c-header__mobile-contact--isopen' : 'c-header__mobile-contact'}
                onClick={() => OnNavigateClick}
            >
                Contacts
            </FancyLink>
            <FancyLink destination="/" a11yText="Home" extraClasses="c-header__logo-mobile">
                <svg viewBox="0 0 98 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect width="98" height="89" fill="black" />
                    </g>
                    <path
                        d="M28.6188 45.379C27.5457 45.783 26.7152 46.411 26.1272 47.263C25.5465 48.1076 25.2562 49.1506 25.2562 50.3919C25.2562 50.862 25.3077 51.2365 25.4106 51.5157C25.44 51.6111 25.4767 51.6956 25.5208 51.769C25.5502 51.8205 25.5649 51.8719 25.5649 51.9233C24.7491 51.9233 24.1537 51.7617 23.7789 51.4385C23.3599 51.086 23.1505 50.5168 23.1505 49.7309C23.1505 49.2387 23.257 48.754 23.4702 48.2766C23.6833 47.7918 23.9847 47.3254 24.3742 46.8774C24.7417 46.4514 25.179 46.0548 25.6862 45.6875C26.2007 45.3129 26.7556 44.9898 27.3509 44.718C28.6004 44.1524 29.8426 43.8697 31.0773 43.8697C31.4154 43.8697 31.7168 43.8844 31.9814 43.9137L32.1798 57.7955L36.9316 43.9798H39.798L39.9965 57.7955L44.7372 43.9798H46.3248L40.0406 60.7922H36.7882L36.5236 49.3122L32.235 60.7922H28.9826L28.6188 45.379Z"
                        fill="white"
                    />
                    <path
                        d="M46.2696 49.5105H49.522L49.2353 50.9097C49.7498 50.4543 50.1688 50.1311 50.4922 49.9402C50.9919 49.6537 51.4807 49.5105 51.9585 49.5105C52.4436 49.5105 52.8331 49.6831 53.1271 50.0283C53.2594 50.1826 53.3586 50.3625 53.4248 50.5682C53.4909 50.7665 53.524 50.9795 53.524 51.2072C53.524 51.4128 53.4909 51.6111 53.4248 51.8021C53.3586 51.9931 53.2594 52.1657 53.1271 52.3199C52.9801 52.4815 52.8 52.61 52.5869 52.7055C52.3811 52.801 52.1496 52.8487 51.8923 52.8487C51.6939 52.8487 51.5358 52.8157 51.4182 52.7496C51.3006 52.6835 51.2088 52.588 51.1426 52.4631C51.0838 52.3383 51.0434 52.2171 51.0213 52.0996C50.9552 51.7837 50.889 51.5744 50.8229 51.4716C50.7715 51.3981 50.6906 51.3614 50.5804 51.3614C50.2643 51.3614 49.996 51.4275 49.7755 51.5597C49.555 51.6919 49.2757 51.9123 48.9376 52.2208L47.1296 60.7922H43.8772L46.2696 49.5105Z"
                        fill="white"
                    />
                    <path
                        d="M56.9968 48.2876C56.7543 48.2876 56.5228 48.2435 56.3023 48.1554C56.0818 48.0599 55.8907 47.9314 55.729 47.7698C55.5673 47.6155 55.4386 47.4282 55.3431 47.2079C55.2549 46.9876 55.2108 46.7562 55.2108 46.5138C55.2108 46.2714 55.2549 46.0401 55.3431 45.8197C55.4386 45.5994 55.5673 45.4047 55.729 45.2358C55.8907 45.0669 56.0818 44.9383 56.3023 44.8502C56.5228 44.7547 56.7543 44.707 56.9968 44.707C57.2394 44.707 57.4709 44.7547 57.6914 44.8502C57.9119 44.9383 58.1067 45.0669 58.2757 45.2358C58.4448 45.4047 58.5734 45.5994 58.6616 45.8197C58.7571 46.0401 58.8049 46.2714 58.8049 46.5138C58.8049 46.7562 58.7571 46.9876 58.6616 47.2079C58.5734 47.4282 58.4448 47.6155 58.2757 47.7698C58.1067 47.9314 57.9119 48.0599 57.6914 48.1554C57.4709 48.2435 57.2394 48.2876 56.9968 48.2876ZM55.4644 60.9244C54.7441 60.9244 54.1745 60.7114 53.7555 60.2854C53.2851 59.8153 53.0499 59.1286 53.0499 58.2252C53.0499 57.7992 53.1087 57.3071 53.2263 56.7489L54.7588 49.5105H58.0111L56.3905 57.1785C56.3317 57.3695 56.3023 57.6119 56.3023 57.9057C56.3023 58.2142 56.3721 58.4308 56.5117 58.5557C56.6587 58.6806 56.8939 58.743 57.2173 58.743C57.4378 58.743 57.651 58.6952 57.8568 58.5998C58.0699 58.4969 58.2647 58.3574 58.4411 58.1811C58.8012 57.8212 59.0732 57.3438 59.2569 56.7489H60.2051C59.8008 57.8873 59.2937 58.7944 58.6836 59.4701C58.1691 60.021 57.5885 60.4176 56.9417 60.66C56.4713 60.8363 55.9789 60.9244 55.4644 60.9244Z"
                        fill="white"
                    />
                    <path
                        d="M63.259 66.433C62.9062 66.433 62.5754 66.3853 62.2667 66.2898C61.9654 66.2017 61.7045 66.0658 61.484 65.8822C61.2488 65.6986 61.065 65.4672 60.9327 65.1881C60.8004 64.9163 60.7343 64.6005 60.7343 64.2406C60.7343 63.3886 61.1348 62.6578 61.936 62.0482C62.5387 61.6001 63.3655 61.2109 64.4166 60.8803L64.6922 59.6905C63.9205 60.5131 63.0164 60.9244 61.9801 60.9244C61.1201 60.9244 60.4256 60.6563 59.8964 60.1201C59.279 59.4885 58.9703 58.5483 58.9703 57.2997C58.9703 56.7709 59.0254 56.2127 59.1357 55.6251C59.2386 55.0375 59.3929 54.4573 59.5987 53.8844C60.0691 52.5917 60.7122 51.5487 61.5281 50.7555C62.4688 49.852 63.553 49.4003 64.7804 49.4003C65.3904 49.4003 65.8461 49.5068 66.1475 49.7198C66.4562 49.9255 66.6105 50.2009 66.6105 50.5461V50.6783L66.8531 49.5105H70.1054L67.8674 59.9769C68.5803 59.7419 69.1499 59.3893 69.5762 58.9193C70.0393 58.4125 70.4178 57.689 70.7118 56.7489H71.6599C71.2557 58.0856 70.653 59.1176 69.8518 59.8447C69.2638 60.3735 68.5362 60.7481 67.6689 60.9685L67.3271 62.599C67.0405 64.0386 66.4672 65.0816 65.6073 65.7279C64.9825 66.198 64.1998 66.433 63.259 66.433ZM63.4464 58.743C63.7698 58.743 64.1116 58.5924 64.4717 58.2913C64.8612 57.9534 65.1222 57.5164 65.2545 56.9802L66.4011 51.6368C66.4011 51.5634 66.3827 51.4789 66.3459 51.3834C66.3165 51.288 66.2724 51.1998 66.2136 51.119C66.0372 50.906 65.791 50.7995 65.475 50.7995C65.1736 50.7995 64.8796 50.8987 64.593 51.097C64.3137 51.2953 64.0491 51.5707 63.7992 51.9233C63.3582 52.5623 62.9944 53.3959 62.7077 54.4242C62.5754 54.8796 62.4762 55.3313 62.41 55.7793C62.3439 56.22 62.3108 56.6203 62.3108 56.9802C62.3108 57.7294 62.4505 58.2362 62.7298 58.5006C62.8253 58.6034 62.9319 58.6695 63.0495 58.6989C63.1671 58.7283 63.2994 58.743 63.4464 58.743ZM62.7408 64.6703C62.976 64.6703 63.2185 64.505 63.4684 64.1745C63.7183 63.8513 63.9131 63.3482 64.0528 62.6651L64.1851 62.0151C63.5015 62.2722 62.9907 62.5329 62.6526 62.7973C62.2042 63.1352 61.9801 63.5135 61.9801 63.9321C61.9801 64.1304 62.0426 64.2957 62.1675 64.4279C62.3071 64.5895 62.4982 64.6703 62.7408 64.6703Z"
                        fill="white"
                    />
                    <path
                        d="M78.8592 60.9244C77.9257 60.9244 77.2348 60.66 76.7865 60.1312C76.3969 59.6758 76.2022 59.0919 76.2022 58.3794C76.2022 58.0416 76.2426 57.6486 76.3234 57.2006C76.4116 56.7525 76.5403 56.176 76.7093 55.4709C76.8784 54.7511 77.0033 54.1782 77.0842 53.7522C77.1724 53.3188 77.2165 52.9442 77.2165 52.6284C77.2165 51.8572 76.9445 51.4716 76.4006 51.4716C76.0184 51.4716 75.6656 51.6736 75.3422 52.0775C75.0703 52.4227 74.8351 52.9148 74.6366 53.5538L73.1042 60.7922H69.8518L73.1262 45.4451L76.4668 44.9934L75.254 50.6783C75.695 50.1862 76.1691 49.841 76.6762 49.6427C77.0511 49.4958 77.4553 49.4224 77.889 49.4224C78.6534 49.4224 79.2561 49.6207 79.6971 50.0173C80.1674 50.4506 80.4026 51.1007 80.4026 51.9674C80.4026 52.4888 80.3071 53.1682 80.116 54.0056C80.0646 54.2479 79.98 54.6115 79.8624 55.0963C79.6493 55.9115 79.4949 56.5616 79.3994 57.0463C79.3406 57.3548 79.3112 57.6045 79.3112 57.7955C79.3112 58.0966 79.3773 58.3317 79.5096 58.5006C79.6493 58.6622 79.8845 58.743 80.2152 58.743C80.6636 58.743 81.0421 58.5594 81.3508 58.1921C81.586 57.913 81.8396 57.4319 82.1115 56.7489H83.0596C82.501 58.4014 81.7955 59.5583 80.9429 60.2193C80.3402 60.6894 79.6456 60.9244 78.8592 60.9244Z"
                        fill="white"
                    />
                    <path
                        d="M84.3496 60.9244C83.6293 60.9244 83.0596 60.7114 82.6407 60.2854C82.1703 59.8153 81.9351 59.1286 81.9351 58.2252C81.9351 57.7992 81.9939 57.3071 82.1115 56.7489L83.4676 50.4139H82.7179L82.9053 49.5105H83.644L84.3275 46.3926L87.668 45.9409L86.8963 49.5105H88.2524L88.076 50.4139H86.7199L85.2756 57.1785C85.2168 57.3695 85.1874 57.6119 85.1874 57.9057C85.1874 58.2142 85.2573 58.4308 85.3969 58.5557C85.5439 58.6806 85.7791 58.743 86.1025 58.743C86.323 58.743 86.5362 58.6952 86.742 58.5998C86.9551 58.4969 87.1499 58.3574 87.3263 58.1811C87.6864 57.8212 87.9584 57.3438 88.1421 56.7489H89.0903C88.686 57.8873 88.1789 58.7944 87.5688 59.4701C87.0543 60.021 86.4737 60.4176 85.8269 60.66C85.3565 60.8363 84.864 60.9244 84.3496 60.9244Z"
                        fill="white"
                    />
                    <path
                        d="M17.2042 41.4799C16.7926 41.4799 16.4324 41.4615 16.1237 41.4248C15.815 41.3881 15.5247 41.2999 15.2528 41.1604C14.5398 40.8152 14.1834 40.1248 14.1834 39.0891C14.1834 38.5897 14.2605 37.9911 14.4149 37.2933C14.5766 36.5956 14.8044 35.8427 15.0984 35.0348C15.7452 33.2573 16.5464 31.5496 17.5019 29.9117C16.7522 29.9558 16.1568 30.0697 15.7158 30.2533C15.2822 30.4296 14.9955 30.705 14.8559 31.0796C14.922 31.0796 14.9882 31.1567 15.0543 31.3109C15.1205 31.4652 15.1536 31.6231 15.1536 31.7847C15.1536 32.0491 15.0323 32.2621 14.7897 32.4237C14.5472 32.5853 14.2458 32.6661 13.8857 32.6661C13.4814 32.6661 13.1507 32.5559 12.8935 32.3355C12.6215 32.1079 12.4855 31.781 12.4855 31.355C12.4855 30.9804 12.5995 30.6242 12.8273 30.2863C13.0552 29.9411 13.3785 29.6437 13.7975 29.3939C14.2238 29.1369 14.7162 28.9386 15.2748 28.799C15.8408 28.6521 16.4471 28.5787 17.0939 28.5787C17.41 28.5787 17.8032 28.6007 18.2736 28.6448C19.5378 26.6543 20.802 25.0935 22.0662 23.9624C23.5361 22.6477 24.8885 21.9903 26.1233 21.9903C26.8583 21.9903 27.4536 22.0968 27.9093 22.3098L24.3704 38.9129H21.118L22.8489 30.727C22.305 30.4773 21.7942 30.29 21.3165 30.1651C20.8461 30.0403 20.3499 29.9558 19.8281 29.9117C18.9755 31.7553 18.2773 33.6393 17.7334 35.5636C17.1748 37.4953 16.8955 39.0487 16.8955 40.2239C16.8955 40.8042 16.9984 41.2228 17.2042 41.4799ZM24.3704 23.5878C23.7162 23.9404 23.029 24.6051 22.3087 25.582C21.6031 26.5515 20.9343 27.6716 20.3022 28.9422C21.3312 29.1405 22.2499 29.4013 23.0584 29.7245L24.3704 23.5878Z"
                        fill="white"
                    />
                    <path
                        d="M30.0812 39.0451C29.2213 39.0451 28.5267 38.777 27.9975 38.2408C27.3801 37.6092 27.0714 36.669 27.0714 35.4204C27.0714 34.8916 27.1266 34.3333 27.2368 33.7458C27.3397 33.1582 27.4941 32.5779 27.6999 32.005C28.1703 30.7123 28.8134 29.6694 29.6292 28.8761C30.57 27.9727 31.6541 27.521 32.8816 27.521C33.4916 27.521 33.9473 27.6275 34.2486 27.8405C34.5573 28.0462 34.7117 28.3216 34.7117 28.6668V28.7549L35.8142 23.5658L39.1547 23.1141L36.5639 35.2992C36.4977 35.5195 36.4646 35.7619 36.4646 36.0263C36.4646 36.3348 36.5381 36.5515 36.6851 36.6764C36.8321 36.8012 37.0673 36.8636 37.3907 36.8636C37.8097 36.8636 38.1845 36.6764 38.5153 36.3018C38.7946 35.9712 39.0298 35.4938 39.2209 34.8695H40.169C39.7721 36.0006 39.2833 36.893 38.7027 37.5467C38.2102 38.0902 37.6627 38.4685 37.06 38.6815C36.6263 38.8357 36.1523 38.9129 35.6378 38.9129C35.013 38.9129 34.5096 38.7476 34.1274 38.4171C33.7452 38.0866 33.51 37.6055 33.4218 36.9738C33.0175 37.5834 32.5802 38.0535 32.1098 38.384C31.4998 38.8247 30.8236 39.0451 30.0812 39.0451ZM31.5475 36.8636C31.7092 36.8636 31.882 36.8233 32.0657 36.7425C32.2568 36.6617 32.4369 36.5478 32.6059 36.4009C33.0028 36.041 33.2674 35.571 33.3997 34.9907V34.8695L34.5022 29.7024C34.4508 29.4968 34.3773 29.3315 34.2817 29.2066C34.1274 29.0157 33.8922 28.9202 33.5761 28.9202C33.2748 28.9202 32.9808 29.0193 32.6941 29.2177C32.4148 29.416 32.1502 29.6914 31.9003 30.044C31.4593 30.683 31.0955 31.5166 30.8089 32.5449C30.6766 33.0003 30.5774 33.452 30.5112 33.9C30.4451 34.3407 30.412 34.741 30.412 35.1009C30.412 35.8501 30.5516 36.3569 30.8309 36.6213C30.9265 36.7241 31.0331 36.7902 31.1507 36.8196C31.2683 36.849 31.4005 36.8636 31.5475 36.8636Z"
                        fill="white"
                    />
                    <path
                        d="M41.944 39.0451C41.0841 39.0451 40.3895 38.777 39.8603 38.2408C39.2429 37.6092 38.9342 36.669 38.9342 35.4204C38.9342 34.8916 38.9893 34.3333 39.0996 33.7458C39.2025 33.1582 39.3568 32.5779 39.5626 32.005C40.033 30.7123 40.6761 29.6694 41.492 28.8761C42.4328 27.9727 43.5169 27.521 44.7443 27.521C45.3544 27.521 45.8101 27.6275 46.1114 27.8405C46.4201 28.0462 46.5745 28.3216 46.5745 28.6668V28.8321L46.817 27.6312H50.0693L48.4487 35.2992C48.3825 35.5195 48.3495 35.7619 48.3495 36.0263C48.3495 36.6727 48.6582 36.9959 49.2756 36.9959C49.6871 36.9959 50.062 36.7865 50.4001 36.3679C50.6867 36.0153 50.9219 35.5159 51.1057 34.8695H52.0538C51.6496 36.0153 51.1608 36.9224 50.5875 37.5908C50.1024 38.1417 49.5548 38.5383 48.9448 38.7807C48.4965 38.9569 48.0224 39.0451 47.5226 39.0451C46.8832 39.0451 46.3723 38.8725 45.9901 38.5273C45.6153 38.1747 45.3874 37.6569 45.3066 36.9738C44.8803 37.5761 44.432 38.0462 43.9616 38.384C43.3589 38.8247 42.6863 39.0451 41.944 39.0451ZM43.4103 36.8636C43.5794 36.8636 43.7558 36.8196 43.9395 36.7314C44.1306 36.6433 44.3144 36.5184 44.4908 36.3569C44.8876 35.9749 45.1522 35.4791 45.2845 34.8695L46.365 29.7795C46.365 29.7061 46.3466 29.6216 46.3099 29.5261C46.2805 29.4233 46.2364 29.3278 46.1776 29.2397C46.0012 29.0267 45.7549 28.9202 45.4389 28.9202C45.1375 28.9202 44.8436 29.0193 44.5569 29.2177C44.2776 29.416 44.013 29.6914 43.7631 30.044C43.3221 30.683 42.9583 31.5166 42.6716 32.5449C42.5394 33.0003 42.4401 33.452 42.374 33.9C42.3078 34.3407 42.2748 34.741 42.2748 35.1009C42.2748 35.8501 42.4144 36.3569 42.6937 36.6213C42.7892 36.7241 42.8958 36.7902 43.0134 36.8196C43.131 36.849 43.2633 36.8636 43.4103 36.8636Z"
                        fill="white"
                    />
                    <path
                        d="M64.8427 39.0451C63.9092 39.0451 63.2183 38.7807 62.77 38.2518C62.3805 37.7964 62.1857 37.2125 62.1857 36.5001C62.1857 36.1622 62.2261 35.7693 62.307 35.3212C62.3952 34.8732 62.5238 34.2966 62.6928 33.5915C62.8619 32.8717 62.9868 32.2988 63.0677 31.8728C63.1559 31.4395 63.2 31.0649 63.2 30.7491C63.2 29.9779 62.928 29.5922 62.3841 29.5922C62.0019 29.5922 61.6491 29.7942 61.3257 30.1982C61.0538 30.5434 60.8186 31.0355 60.6202 31.6745L59.0877 38.9129H55.8354L57.4891 31.1236C57.5332 30.9474 57.5552 30.7601 57.5552 30.5618C57.5552 30.2606 57.5075 30.0293 57.4119 29.8677C57.287 29.6694 57.1069 29.5702 56.8717 29.5702C56.4454 29.5702 56.0742 29.7759 55.7582 30.1872C55.4789 30.5397 55.24 31.0355 55.0416 31.6745L53.5091 38.9129H50.2568L52.6492 27.6312H55.9015L55.659 28.799C56.1 28.3069 56.5814 27.958 57.1032 27.7524C57.5148 27.5981 57.9521 27.521 58.4152 27.521C59.0473 27.521 59.5507 27.6679 59.9256 27.9617C60.3445 28.2922 60.6128 28.7917 60.7304 29.46C61.2155 28.7109 61.7741 28.182 62.4062 27.8736C62.8545 27.6532 63.3433 27.543 63.8725 27.543C64.6295 27.543 65.2285 27.7413 65.6695 28.138C66.1399 28.5713 66.3751 29.2213 66.3751 30.088C66.3751 30.5801 66.2833 31.2595 66.0995 32.1262C66.026 32.4861 65.9378 32.8497 65.8349 33.2169C65.6512 33.922 65.5005 34.5721 65.3829 35.167C65.3241 35.4755 65.2947 35.7252 65.2947 35.9162C65.2947 36.2173 65.3608 36.4523 65.4931 36.6213C65.6328 36.7829 65.868 36.8636 66.1987 36.8636C66.6471 36.8636 67.0256 36.68 67.3343 36.3128C67.5695 36.0337 67.8231 35.5526 68.095 34.8695H69.0432C68.4846 36.5221 67.779 37.6789 66.9264 38.34C66.3237 38.81 65.6291 39.0451 64.8427 39.0451Z"
                        fill="white"
                    />
                </svg>
            </FancyLink>
            <button aria-label="Menu" onClick={OnNavigateClick} className={isMenuOpen ? 'c-header__burger c-header__burger--open' : 'c-header__burger'}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isMenuOpen && (
                <nav className="c-header__mobile-nav">
                    <ul>
                        <li>
                            <FancyLink destination="/work" a11yText="text" onClick={() => OnNavigateClick}>
                                Work
                            </FancyLink>
                        </li>
                        <li>
                            <FancyLink destination="/services" a11yText="text" onClick={() => OnNavigateClick}>
                                Services
                            </FancyLink>
                        </li>
                        <li>
                            <FancyLink destination="/about" a11yText="text" onClick={() => OnNavigateClick}>
                                About
                            </FancyLink>
                        </li>
                        <li>
                            <FancyLink destination="/insights" a11yText="text" onClick={() => OnNavigateClick}>
                                Insights
                            </FancyLink>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Mobile;
