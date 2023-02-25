import Image from 'next/image';
import myProfile from '../../../public/imgs/profile.jpeg';
import {
  MyProfileContainer,
  ProfileImage,
  ProfileTextContainer,
} from './MyProfile.style';

export default function MyProfile() {
  return (
    <MyProfileContainer>
      <ProfileImage>
        <Image
          src={myProfile}
          alt='myProfile'
          layout='fill'
          objectFit='cover'
        />
      </ProfileImage>

      <ProfileTextContainer>
        <h1>매일매일 발전하고 있는 프론트엔드 개발자입니다.</h1>
        <p>
          저는 현재 개발자가 되기위해서 매일매일 새로운 것을 배우고 경험을 쌓고
          있습니다. 이 과정에서 저는 많은 어려움을 겪기도 하지만, 그만큼
          뿌듯하고 보람찬 순간도 많이 경험하고 있습니다. <br />제 블로그에서는
          제가 개발하면서 경험한 것들과 새로운 기술을 공부하며 얻은 지식을
          공유하고자 합니다. 주로 웹 개발과 관련된 내용을 다루며, 프론트엔드를
          주로 다루고 있습니다.
        </p>
      </ProfileTextContainer>
    </MyProfileContainer>
  );
}
