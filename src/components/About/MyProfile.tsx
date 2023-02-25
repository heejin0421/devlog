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
          새로운 기술을 배우는것에 대하여 흥미를 느끼며 <br />
          내가 익히고 사용하는 기술을 더 효율적으로 <br />
          사용할수없을까를 매번 고민합니다.
        </p>
      </ProfileTextContainer>
    </MyProfileContainer>
  );
}
