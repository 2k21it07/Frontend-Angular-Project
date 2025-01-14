import { Component } from '@angular/core';

@Component({
  selector: 'app-degreephoto',
  templateUrl: './degreephoto.component.html',
  styleUrl: './degreephoto.component.css'
})
export class DegreephotoComponent {
  places = [
    {
      name: 'Taj Mahal, Agra',
      link: 'https://www.google.com/maps/@27.1733248,78.0421187,2a,75y,2.21h,76.68t/data=!3m7!1e1!3m5!1saA6c1-reje3WjVy1xsTRqw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DaA6c1-reje3WjVy1xsTRqw%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D167.61987%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
      image: '../../assets/images/Taj Mahal.jpeg'
    },
    {
      name: 'Ladakh',
      link: 'https://www.google.com/maps/@32.8124624,77.4499207,3a,75y,1.39h,87.29t/data=!3m7!1e1!3m5!1s8nTcpo7TgLqSIjVSYZQO9g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8nTcpo7TgLqSIjVSYZQO9g%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D314.4768%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      image: '../../assets/images/Ladakh.jpeg'
    },
    {
      name: 'Manali',
      link: 'https://www.google.com/maps/@32.2446756,77.1910013,3a,75y,63.68h,88.66t/data=!3m6!1e1!3m4!1sgGA0P9vMGf8SjGSMiKZxZA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      image: '../../assets/images/Manali.jpeg'
    },
    
   
    {
      name: 'The Majestic Mysore Palace, Karnataka',
      link: 'https://www.google.com/maps/@12.3051374,76.6558945,2a,75y,36.67h,75.66t/data=!3m7!1e1!3m5!1sAavM_H3CtaTn5BYX1K_Eiw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DAavM_H3CtaTn5BYX1K_Eiw%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D27.01437%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
      image: '../../assets/images/Mysore Palace, Karnataka Guide.jpeg'
    },
    
    {
      name: 'Historic Charminar, Hyderabad, Telangana',
      link: 'https://www.google.com/maps/@17.361617,78.4747794,2a,75y,59.79h,75.36t/data=!3m7!1e1!3m5!1sD6PaGp-bZ9q3b5QZ8vTbGQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DD6PaGp-bZ9q3b5QZ8vTbGQ%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D357.0701%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
      image: '../../assets/images/Visit Hyderabad.jpeg'
    },
 
    {
      name: 'Tranquil Tea Gardens of Munnar, Kerala',
      link: 'https://www.google.com/maps/@10.0904349,77.0545149,3a,75y,253.48h,89.04t/data=!3m6!1e1!3m4!1svjUUS8CN0DbJntVNW0_9fA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      image: '../../assets/images/Munnar.jpeg'
    },
    {
      name: 'Sculptural Marvels of Mahabalipuram, Tamil Nadu',
      link: 'https://www.google.com/maps/@12.6166721,80.1989225,2a,75y,101.66h,87.26t/data=!3m6!1e1!3m4!1sWrxCwifSDKP2ImY2oBf_SA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
      image: '../../assets/images/Mahabalipuram.jpeg'
    },
   
      {
        name: 'Gateway of India',
        link: 'https://www.google.com/maps/@18.922,72.834,3a,75y,245.65h,85.55t/data=!3m7!1e1!3m5!1sABX6E_T4f8XPlh0wI6vNFA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DABX6E_T4f8XPlh0wI6vNFA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D248.3756%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192',
        image: '../../assets/images/Gateway OF India.jpeg'
      },
      {
        name: 'Boat house,Alapuzha',
        link: 'https://www.google.com/maps/@9.5000561,76.3507194,3a,75y,175.38h,77.42t/data=!3m7!1e1!3m5!1sy0RcMAg2K-jrTl65tPDwOQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dy0RcMAg2K-jrTl65tPDwOQ%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D131.19684%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Alapuzha.jpeg'
      },
      {
        name: 'Bada Imambara, Lucknow',
        link: 'https://www.google.com/maps/@26.86839,80.9133192,3a,75y,270h,90t/data=!3m7!1e1!3m5!1s7NTUuIhFqju8y7LsCdFaog!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D7NTUuIhFqju8y7LsCdFaog%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D226.63347%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Bada Imambara, Lucknow.jpeg'
      },
      {
        name: 'Tanjore Big Temple or Brihadeshwara Temple',
        link: 'https://www.google.com/maps/@10.7828632,79.1325723,2a,36.4y,270.12h,101.23t/data=!3m6!1e1!3m4!1sQid9LQ__fUviqZIlUciktA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/thanjavur big temple.jpeg'
      },
      {
        name: 'Ooty, Tamil Nadu, India',
        link:'https://www.google.com/maps/@11.4117822,76.7206522,3a,75y,26.13h,90t/data=!3m7!1e1!3m5!1sL4xR7hrr-a-mGFK68R4l5Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DL4xR7hrr-a-mGFK68R4l5Q%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D26.128866%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
        // link: 'https://www.google.com/maps/@11.4108856,76.6937488,3a,75y,98.39h,75.63t/data=!3m7!1e1!3m5!1sADx1b3xn7ZxJ8sZ0Y62O9g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DADx1b3xn7ZxJ8sZ0Y62O9g%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D270.36407%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
        image: '../../assets/images/Ooty.jpeg'
      },
      {
        name: 'Velakanni',
        link: 'https://www.google.com/maps/@10.6809331,79.8497912,3a,60y,180h,90t/data=!3m8!1e1!3m6!1sAF1QipMluhjbUPANKQLVnOh2jLpOJZ-snnwoROfIp9w3!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMluhjbUPANKQLVnOh2jLpOJZ-snnwoROfIp9w3%3Dw203-h100-k-no-pi0-ya84.539-ro-0-fo100!7i10240!8i5120?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Velakkani.jpeg'
      },
      {
        name: 'Yercaud',
        link: 'https://www.google.com/maps/@11.7857636,78.2092266,3a,75y,77.98h,67.2t/data=!3m6!1e1!3m4!1skjboK9I1NUfD-9mQTysuEA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Yercaud Places.jpeg'
      },
      {
        name: 'Dhanushkodi Beach',
        link: 'https://www.google.com/maps/@9.1509363,79.4496148,3a,75y,270h,100t/data=!3m11!1e1!3m9!1sAF1QipOt-mDXxrYBwv3zaTGLa6q6W7zQTawCh4bvvFLH!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOt-mDXxrYBwv3zaTGLa6q6W7zQTawCh4bvvFLH%3Dw203-h100-k-no-pi-10-ya219-ro0-fo100!7i10240!8i5120!9m2!1b1!2i50?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Dhanushkodi, India.jpeg'
      },
      {
        name: 'Howrah Bridge',
        link: 'https://www.google.com/maps/@47.647048,-122.3483092,2a,75y,90h,90t/data=!3m7!1e1!3m5!1sFPodlavmB6FbErw17dD1rg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DFPodlavmB6FbErw17dD1rg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D36.49368%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Howrah Bridge.jpeg'
      },
      {
        name: 'Humayun’s Tomb, Delhi',
        link: 'https://www.google.com/maps/@28.593146,77.250551,3a,75y,101.89h,75.58t/data=!3m7!1e1!3m5!1sAD3kpxMlX4QQHbDd2IjUEg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DAD3kpxMlX4QQHbDd2IjUEg%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D1.20755%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
        image: '../../assets/images/HUMAYUN TOMB DELHI.jpeg'
      },
      {
        name: 'Kaniya Kumari',
        link: 'https://www.google.com/maps/@8.0776914,77.5553605,3a,90y,92.51t/data=!3m11!1e1!3m9!1sAF1QipMcwQ6nwYcwqFAsxDTCez1A8FldOgUxsYm5827k!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMcwQ6nwYcwqFAsxDTCez1A8FldOgUxsYm5827k%3Dw203-h100-k-no-pi-0-ya315.2193-ro-0-fo100!7i6912!8i3456!9m2!1b1!2i34?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Kanyakumari , TN , India.jpeg'
      },
      {
        name: 'Darjeeling',
        link: 'https://www.google.com/maps/@27.031,88.611,3a,75y,134.4h,86.04t/data=!3m7!1e1!3m5!1sAD5zLtuxvT6Ll_3yEzM3Fg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DAD5zLtuxvT6Ll_3yEzM3Fg%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D251.2285%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
        image: '../../assets/images/Darjeeling.jpeg'
      },
      {
        name: 'The Taj Mahal Palace Hotel, Mumbai, India',
        link: 'https://www.google.com/maps/@18.921751,72.834104,3a,75y,105.43h,86.55t/data=!3m7!1e1!3m5!1sAD5qZcO2BqR1rcF2xGVK8Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DAD5qZcO2BqR1rcF2xGVK8Q%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D283.2676%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656',
        image: '../../assets/images/Taj Hotels.jpeg'
      },
      {
        name: 'Gwalior fort, India',
        link: 'https://www.google.com/maps/@10.7828632,79.1325723,2a,36.4y,270.12h,101.23t/data=!3m6!1e1!3m4!1sQid9LQ__fUviqZIlUciktA!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Gwalior fort.jpeg'
      },
      {
        name: ' Dain-Thlen Falls,Mehagalaya',
        link: 'https://www.google.com/maps/@25.2932778,91.68351,3a,75y,90t/data=!3m11!1e1!3m9!1sAF1QipN4hvbRRkmOW5C_jGtf_QDs9ZoDDEy9lBn5xuXE!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN4hvbRRkmOW5C_jGtf_QDs9ZoDDEy9lBn5xuXE%3Dw203-h100-k-no-pi-0-ya60.000004-ro-0-fo100!7i6080!8i3040!9m2!1b1!2i39?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Dain-Thlen Falls.jpeg'
      },
      {
        name: 'Shri Murudeshwara Temple,Karnataka',
        link: 'https://www.google.com/maps/@14.0934323,74.4833175,3a,58.9y,201.44h,102.57t/data=!3m11!1e1!3m9!1sAF1QipOT84ArR6WCm2Yw0_eXDB6bsF0rhqqr-T80fFRy!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOT84ArR6WCm2Yw0_eXDB6bsF0rhqqr-T80fFRy%3Dw203-h100-k-no-pi-0-ya107.485725-ro-0-fo100!7i8704!8i4352!9m2!1b1!2i39?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Murudeshwar, Karnataka.jpeg'
      },
      {
        name: 'Hawa Mahal, Jaipur',
        link: 'https://www.google.com/maps/@26.9239518,75.8267651,3a,90y,80.26h,90.96t/data=!3m8!1e1!3m6!1sAF1QipPIThPUsPIwR-UM5BE03yWR4ELmNeqlvv2opWoW!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPIThPUsPIwR-UM5BE03yWR4ELmNeqlvv2opWoW%3Dw203-h100-k-no-pi-0-ya63.798965-ro-0-fo100!7i8704!8i4352?coh=205409&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D',
        image: '../../assets/images/Hindu Cosmos — Hawa Mahal_ Pink city Jaipur, Rajasthan, India___.jpeg'
      }
     
    
  ];
}
