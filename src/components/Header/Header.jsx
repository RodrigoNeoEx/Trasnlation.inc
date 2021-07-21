import React from 'react';
import { useHistory } from 'react-router-dom';
import Searcher from '../Searcher/Searcher';
import './style/header.css';

const Header = () => {
  const history = useHistory()
  return (
    <>
      <header className='header'>
        <svg className='header__svg' onClick={() => history.push('/')} viewBox="0 0 139 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0606 10.1532C21.6948 8.22992 20.8815 6.42029 19.6868 4.87129C21.036 3.25322 22.6558 1.88279 24.4738 0.821289C31.0958 16.0088 18.9572 23.0007 18.9572 23.0007H18.7496C21.6734 19.6425 22.8182 15.2213 22.0606 10.1532Z" fill="#FF93C7"/>
          <path d="M3.14265 15.131C5.98474 15.2307 8.76319 16.0016 11.2519 17.381C10.8874 16.6541 10.6068 15.8879 10.4157 15.0972C9.29334 10.4228 10.8478 4.60096 12.4978 0.168457C14.8604 0.989707 17.397 3.09908 19.1423 5.54596C20.197 6.9392 20.9154 8.5584 21.2412 10.2766C22.1054 16.031 20.3769 20.1991 17.571 23.0622L17.4475 23.1916C17.4475 23.1916 11.6111 24.1872 7.04856 22.0497C1.76772 19.5635 0.448914 15.4178 0.448914 15.4178C1.3292 15.1974 2.23581 15.1009 3.14265 15.131Z" fill="#419FB9"/>
          <path d="M19.1424 5.54613L19.047 5.41113C16.2861 9.21285 14.8308 13.81 14.8998 18.5118C14.8979 20.1559 15.0653 21.7958 15.3993 23.4055C16.085 23.376 16.7688 23.3103 17.4476 23.2086C17.4925 23.1693 17.5318 23.1186 17.5767 23.0736C20.3827 20.1993 22.1055 16.0311 21.2413 10.2768C20.9156 8.55858 20.1972 6.93938 19.1424 5.54613Z" fill="#265E6C"/>
          <path d="M41.0905 17.693L40.4063 10.5784L38.0513 17.693H35.8028L33.3413 10.4867L32.7485 17.693H30.5L31.7157 6.89164C32.0352 6.72445 32.5516 6.57129 32.9163 6.57129C33.7673 6.57129 34.4053 6.83016 34.6635 7.59167L37.2014 15.1787L39.7995 6.92184C40.1191 6.70827 40.544 6.57129 40.9539 6.57129C41.82 6.57129 42.2449 6.87546 42.3826 7.95732L43.5983 17.6919H41.0905V17.693Z" fill="#419FB9"/>
          <path d="M50.7991 15.4689L51.7254 16.9467C50.7829 17.541 49.7351 17.8452 48.4591 17.8452C46.0428 17.8452 44.6152 16.4278 44.6152 14.0214C44.6152 11.4014 46.1192 9.83203 48.6872 9.83203C50.6173 9.83203 51.7415 10.8071 51.7415 12.4067C51.7415 13.9459 50.3289 14.8595 47.9729 14.8595C47.6383 14.8595 47.3048 14.8293 46.9702 14.798C47.1369 15.6059 47.6383 16.0773 48.6259 16.0773C49.4919 16.0784 50.1902 15.8648 50.7991 15.4689ZM46.9239 13.4735C47.2736 13.5037 47.6232 13.5188 47.9417 13.5188C48.9142 13.5188 49.4607 13.1531 49.4607 12.5135C49.4607 11.9958 49.096 11.6603 48.4581 11.6603C47.6071 11.6603 47.0455 12.3301 46.9239 13.4735Z" fill="#419FB9"/>
          <path d="M53.4567 21.3495L52.4077 19.6582C52.8639 19.491 53.1974 18.9884 53.1974 18.0284V9.98508H55.5524V18.4555C55.5535 20.1155 54.6422 20.8921 53.4567 21.3495ZM54.369 8.79643C55.1748 8.79643 55.6761 8.3391 55.6761 7.53229C55.6761 6.74058 55.1748 6.29834 54.369 6.29834C53.5632 6.29834 53.0618 6.74058 53.0618 7.53229C53.0618 8.3391 53.5632 8.79643 54.369 8.79643Z" fill="#419FB9"/>
          <path d="M56.7363 13.8391C56.7363 11.3259 58.2403 9.83203 60.8234 9.83203C63.4065 9.83203 64.9267 11.3248 64.9267 13.8391C64.9267 16.3534 63.4076 17.8462 60.8234 17.8462C58.2393 17.8462 56.7363 16.3523 56.7363 13.8391ZM62.5405 13.8391C62.5405 12.4984 61.9025 11.6916 60.8385 11.6916C59.7745 11.6916 59.1365 12.4995 59.1365 13.8391C59.1365 15.1799 59.7745 15.9716 60.8385 15.9716C61.9025 15.9716 62.5405 15.1799 62.5405 13.8391Z" fill="#419FB9"/>
          <path d="M71.6382 10.0909L70.9539 12.178C70.6957 12.0109 70.3612 11.9041 69.9964 11.9041C69.0239 11.9041 68.416 12.5588 68.416 14.4636V17.693H66.061V10.1524C66.4709 9.96902 66.912 9.83203 67.3219 9.83203C67.9599 9.83203 68.3397 10.38 68.3397 11.1728C68.9023 10.1826 69.6769 9.83203 70.4666 9.83203C70.8776 9.83203 71.2885 9.93881 71.6382 10.0909Z" fill="#419FB9"/>
          <path d="M76.3805 17.8466C73.8888 17.8466 72.3988 16.3538 72.3988 13.8244C72.3988 11.3112 74.0405 9.8335 76.1825 9.8335C77.1249 9.8335 78.644 10.2143 79.1303 11.9972L77.4133 12.6832C77.2153 12.0889 76.8506 11.6931 76.3041 11.6931C75.3466 11.6931 74.785 12.4858 74.785 13.8255C74.785 15.1813 75.4692 15.9731 76.5773 15.9731C77.2917 15.9731 78.1126 15.7142 78.644 15.3183L79.3885 16.9632C78.5536 17.5727 77.4294 17.8466 76.3805 17.8466Z" fill="#265E6C"/>
          <path d="M79.7048 13.8381C79.7048 11.3249 81.2088 9.83105 83.7918 9.83105C86.3749 9.83105 87.8951 11.3239 87.8951 13.8381C87.8951 16.3524 86.3749 17.8452 83.7918 17.8452C81.2088 17.8452 79.7048 16.3513 79.7048 13.8381ZM85.5089 13.8381C85.5089 12.4974 84.8709 11.6906 83.8069 11.6906C82.7429 11.6906 82.1049 12.4985 82.1049 13.8381C82.1049 15.1789 82.7429 15.9706 83.8069 15.9706C84.8709 15.9706 85.5089 15.1789 85.5089 13.8381Z" fill="#265E6C"/>
          <path d="M96.49 12.7261V17.6921H94.135V13.137C94.135 12.2536 93.7552 11.6895 93.0408 11.6895C92.0231 11.6895 91.3851 12.2375 91.3851 13.8532V17.6921H89.0301V10.1514C89.44 9.96804 89.8811 9.83105 90.291 9.83105C90.8988 9.83105 91.2786 10.3337 91.3087 11.0801C91.9618 10.1503 92.859 9.83105 93.8004 9.83105C95.5024 9.83105 96.49 10.8978 96.49 12.7261Z" fill="#265E6C"/>
          <path d="M105.584 7.63824L104.551 9.31443C103.898 8.85709 103.001 8.52272 102.105 8.52272C101.269 8.52272 100.767 8.88837 100.767 9.46759C100.767 10.2442 101.648 10.5494 102.712 10.9302C104.156 11.4479 105.858 12.1037 105.858 14.2966C105.858 16.5509 104.308 17.8463 101.68 17.8463C100.236 17.8463 98.8986 17.4354 97.9261 16.7041L98.7007 14.9675C99.4452 15.5467 100.524 15.8973 101.8 15.8973C102.788 15.8973 103.366 15.4863 103.366 14.8003C103.366 13.932 102.484 13.6117 101.466 13.2622C100.022 12.7595 98.2747 12.135 98.2747 9.81922C98.2747 7.71698 99.6872 6.57472 102.058 6.57472C103.259 6.57256 104.535 6.92311 105.584 7.63824Z" fill="#FF93C7"/>
          <path d="M113.758 12.7284V17.5273C113.348 17.7095 112.922 17.8476 112.497 17.8476C111.904 17.8476 111.524 17.3601 111.479 16.659C110.856 17.5424 110.02 17.8476 109.184 17.8476C107.65 17.8476 106.723 16.9491 106.723 15.4865C106.723 13.8718 108.075 12.9269 110.461 12.9269C110.765 12.9269 111.084 12.9269 111.404 12.942C111.359 12.1039 111.054 11.6013 110.067 11.6013C109.398 11.6013 108.714 11.8148 108.106 12.2107L107.164 10.7481C108.137 10.1537 109.185 9.83447 110.461 9.83447C112.542 9.83339 113.758 10.9002 113.758 12.7284ZM111.402 14.2968C111.082 14.2817 110.794 14.2817 110.521 14.2817C109.518 14.2817 108.955 14.6473 108.955 15.2718C108.955 15.7594 109.229 16.1099 109.836 16.1099C110.642 16.1099 111.402 15.6073 111.402 14.2968Z" fill="#FF93C7"/>
          <path d="M115.413 15.6071V6.13139C115.822 5.9491 116.264 5.81104 116.673 5.81104C117.373 5.81104 117.768 6.26837 117.768 6.908V15.4087C117.768 15.7743 117.965 15.9728 118.314 15.9728C118.557 15.9728 118.785 15.9275 118.967 15.866L119.272 17.3588C118.755 17.6943 118.223 17.8463 117.57 17.8463C116.218 17.8463 115.413 17.0395 115.413 15.6071Z" fill="#FF93C7"/>
          <path d="M128.323 10.93V17.5268C127.913 17.7091 127.472 17.8472 127.062 17.8472C126.454 17.8472 126.089 17.3445 126.044 16.6283C125.436 17.5268 124.585 17.8472 123.704 17.8472C122.002 17.8472 121.014 16.7804 121.014 14.9522V10.1534C121.424 9.96999 121.865 9.83301 122.275 9.83301C122.975 9.83301 123.369 10.2903 123.369 10.93V14.525C123.369 15.4235 123.749 15.9725 124.464 15.9725C125.406 15.9725 125.968 15.4246 125.968 13.8401V10.1534C126.377 9.96999 126.819 9.83301 127.228 9.83301C127.928 9.83301 128.323 10.2903 128.323 10.93Z" fill="#FF93C7"/>
          <path d="M137.47 6.90761V17.5256C137.06 17.7079 136.619 17.846 136.209 17.846C135.616 17.846 135.236 17.3433 135.191 16.6422C134.538 17.5407 133.611 17.846 132.684 17.846C130.906 17.846 129.736 16.4599 129.736 14.0977C129.736 11.4012 131.317 9.83177 133.991 9.83177C134.28 9.83177 134.676 9.84687 135.116 9.86197V6.12992C135.526 5.94763 135.967 5.80957 136.377 5.80957C137.074 5.81065 137.47 6.26799 137.47 6.90761ZM135.113 11.5996C134.764 11.5845 134.46 11.5845 134.202 11.5845C132.926 11.5845 132.12 12.5143 132.12 14.0977C132.12 15.2864 132.637 15.9864 133.564 15.9864C134.477 15.9864 135.115 15.4536 135.115 13.8378V11.5996H135.113Z" fill="#FF93C7"/>
        </svg>
      </header>
      <Searcher />
    </>
  );
};

export default Header;
