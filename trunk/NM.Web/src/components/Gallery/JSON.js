import React from 'react';
import { IMuiFbPhotoGridImage } from 'mui-fb-photo-grid';
import SeeMore from './SeeMore';

export const stories = [
    {
        url: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        type: "image",
        duration: "8000",
        header: {
            heading: "Hello Everyone",
            subheading: "Demo test",
            profileImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        seeMore: ({ close }) => {
            return <div onClick={close} className='closeStory'>Hello, click to close this. <i className="bi bi-arrow-left"></i></div>;
        },
        seeMoreCollapsed: false,
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        type: "image",
        duration: "8000",
        header: {
            heading: "Good Afternoon Everyone",
            subheading: "Demo test",
            profileImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        seeMore: false, seeMoreCollapsed: true,
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        type: "image",
        duration: "8000",
        header: {
            heading: "Hi Everyone",
            subheading: "Demo test",
            profileImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        seeMore: true, seeMoreCollapsed: false,
    }
]

export const IMAGES: IMuiFbPhotoGridImage[] = [
    {
        title: 'first image', // require
        img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', // require
        imgThumbnail: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', // optional
    },
    {
        title: 'second image',
        img: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
        imgThumbnail: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
        title: 'third image',
        img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        imgThumbnail: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
    },
    {
        title: 'fourth image',
        img: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgThumbnail: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        title: 'fifth image',
        img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg',
        imgThumbnail: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg',
    },
    {
        title: 'sixth image',
        img: 'https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg',
        imgThumbnail: 'https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg',
    },
    {
        title: 'seventh image',
        img: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
        imgThumbnail: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
    },
    {
        title: 'eight image',
        img: 'https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg',
        imgThumbnail: 'https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg',
    },
    {
        title: 'ninth image',
        img: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
        imgThumbnail: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
    }
]

export const stories12 = [
  {
    _id: "0",
    event_title: "Birthday Post",
    event_dics:
      " it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    createAt: "Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)",
    audio: "/assets/music/Hair-Trigger-WST011601.mp3",
    posts: [
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-14.jpg",
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-17.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url: "/assets/img/team/untitled-83.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
      },
      {
        url: "/assets/img/team/untitled-84.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
      },
      {
        url: "/assets/img/team/untitled-85.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-86.jpg",
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
      },
      {
        url:
          "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
      },
      {
        url:
          "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
      },
      {
        url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        type: "video",
        duration: 1000,
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
        // seeMore: <SeeMore />
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video",
      },
    ],
  },
  {
    _id: "1",
    event_title: "Christmas Post",
    event_dics:
      " it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    createAt: "Tue Dec 25 2021 18:20:54 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Dec 25 2021 18:20:54 GMT+0530 (India Standard Time)",
    audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
    posts: [
      {
        url: "/assets/img/team/untitled-14.jpg",
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-15.jpg",
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-17.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url: "/assets/img/team/untitled-83.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
      },
      {
        url: "/assets/img/team/untitled-84.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
      },
      {
        url: "/assets/img/team/untitled-85.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-86.jpg",
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
      },
      {
        url:
          "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
      },
      {
        url:
          "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
      },
      {
        url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        type: "video",
        duration: 1000,
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
        // seeMore: <SeeMore />
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video",
      },
    ],
  },
  {
    _id: "2",
    event_title: "New Year Post",
    event_dics:
      " it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    createAt: "Fri Jan 01 2021 18:20:54 GMT+0530 (India Standard Time)",
    updatedAt: "Fri Jan 01 2021 18:20:54 GMT+0530 (India Standard Time)",
    audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
    posts: [
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-15.jpg",
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-14.jpg",
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-17.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url: "/assets/img/team/untitled-83.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
      },
      {
        url: "/assets/img/team/untitled-84.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
      },
      {
        url: "/assets/img/team/untitled-85.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-86.jpg",
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
      },
      {
        url:
          "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
      },
      {
        url:
          "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
      },
      {
        url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        type: "video",
        duration: 1000,
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
        // seeMore: <SeeMore />
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video",
      },
    ],
  },
  {
    _id: "3",
    event_title: "Birthday Post",
    event_dics:
      " it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    createAt: "Tue Dec 03 2021 18:20:54 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Dec 03 2021 18:20:54 GMT+0530 (India Standard Time)",
    audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
    posts: [
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url: "/assets/img/team/untitled-15.jpg",
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-14.jpg",
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-83.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
      },
      {
        url: "/assets/img/team/untitled-84.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
      },
      {
        url: "/assets/img/team/untitled-85.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-86.jpg",
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
      },
      {
        url:
          "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
      },
      {
        url:
          "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
      },
      {
        url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        type: "video",
        duration: 1000,
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
        // seeMore: <SeeMore />
      },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video",
      },
    ],
  },
  {
    _id: "4",
    event_title: "Celebration Post",
    event_dics: " it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...",
    createAt: "Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)",
    audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
    posts: [
      {
        url: "/assets/img/team/untitled-83.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
      },
      {
        url: "/assets/img/team/untitled-15.jpg",
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-14.jpg",
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
      },
      {
        url: "/assets/img/team/untitled-16.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-17.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      {
        url: "/assets/img/team/untitled-84.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
      },
      {
        url: "/assets/img/team/untitled-85.jpg",
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
      },
      {
        url: "/assets/img/team/untitled-86.jpg",
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
      },
      {
        url:
          "https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
      },
      {
        url:
          "https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
      },
      {
        url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
        type: "video",
        duration: 1000,
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
      },
      // {
      //     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      //     type: 'video',
      //     // seeMore: <SeeMore />
      // },
      // {
      //     url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      //     type: 'video'
      // },
    ],
  },
];

export const storiess = [
    {
        url: '/assets/img/team/untitled-15.jpg',
        duration: "8000",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3",
        type: "image"
    },
    {
        url: '/assets/img/team/untitled-14.jpg',
        duration: "8000",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image"
    },
    {
        url: '/assets/img/team/untitled-16.jpg',
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3"
    },
    {
        url: '/assets/img/team/untitled-17.jpg',
        duration: "8000",
        type: "image",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3"
    },
    {
        url: '/assets/img/team/untitled-83.jpg',
        duration: "8000",
        type: "image",
        audio: "/assets/music/Hair-Trigger-WST011601.mp3"
    },
    {
        url: '/assets/img/team/untitled-84.jpg',
        duration: "8000",
        type: "image",
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3"
    },
    {
        url: '/assets/img/team/untitled-85.jpg',
        duration: "8000",
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3"
    },
    {
        url: '/assets/img/team/untitled-86.jpg',
        type: "image",
        duration: "8000",
        audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
        seeMore: false,
        // seeMore: <SeeMore />,
        // header: {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 5h ago',
        //     profileImage: 'https://picsum.photos/1000/1000'
        // }
    },
    {
        url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
        audio: "/assets/music/Our-Cause-Is-Just_FULL_HEV011301.mp3",
        type: "image",
        // header:
        // {
        //     heading: 'Mohit Karekar',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://picsum.photos/1080/1920'
        // }
    },
    {
        url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
        type: "image",
        audio: "/assets/music/Ultimate-Victory-WST010901.mp3",
        // header:
        // {
        //     heading: 'mohitk05/react-insta-stories',
        //     subheading: 'Posted 32m ago',
        //     profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        // }
    },
    {
        url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        type: 'video',
        duration: 1000, audio: "/assets/music/Written-in-the-Genes_ALT_SHK010201.mp3",
    },
    {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        type: 'video',
        // seeMore: <SeeMore />
    },
    {
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video'
    },
]

export const IMAGES1: IMuiFbPhotoGridImage[] = [
    {
        title: 'first image', // require
        img: '/assets/img/team/untitled-86.jpg', // require
        imgThumbnail: '/assets/img/team/untitled-86.jpg', // optional
    },
    {
        title: 'second image',
        img: '/assets/img/team/untitled-14.jpg',
        imgThumbnail: '/assets/img/team/untitled-14.jpg',
    },
    {
        title: 'third image',
        img: '/assets/img/team/untitled-15.jpg',
        imgThumbnail: '/assets/img/team/untitled-15.jpg',
    },
    {
        title: 'fourth image',
        img: '/assets/img/team/untitled-16.jpg',
        imgThumbnail: '/assets/img/team/untitled-16.jpg',
    },
    {
        title: 'fifth image',
        img: '/assets/img/team/untitled-17.jpg',
        imgThumbnail: '/assets/img/team/untitled-17.jpg',
    },
    {
        title: 'sixth image',
        img: '/assets/img/team/untitled-83.jpg',
        imgThumbnail: '/assets/img/team/untitled-83.jpg',
    },
    {
        title: 'seventh image',
        img: '/assets/img/team/untitled-84.jpg',
        imgThumbnail: '/assets/img/team/untitled-84.jpg',
    },
    {
        title: 'eight image',
        img: '/assets/img/team/untitled-85.jpg',
        imgThumbnail: '/assets/img/team/untitled-85.jpg',
    },
    {
        title: 'tenth image',
        img: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
        imgThumbnail: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
    }
]
