import React from 'react'

const AutomlWeb = () => {
  return (
    <>
      동영상을 업로드 하고 AI를 활용하여 주인공 외 다른 인물 상반신 모자이크 및 블러처리 기능을 제공하는 웹입니다. 중기청 바우처 R&D 사업의 최종 산출물입니다.
      <br/><br/>
      NCP(Naver Cluoud Platform)에서 server 생성 및 배포 환경 구성, SSL인증서 적용, Django 백엔드 구현, 웹 프론트엔드 개발까지 모두 할 수 있는 프로젝트 였습니다. 그리고 AWS S3 스토리지에서 Lamdb를 통해 멀티파트 업로드를 구현할 수 있다는 것을 알 수 있었습니다.
      <br/><br/>
      Django REST Framework를 API로 왜 많이 쓰는지 체감할 수 있었고, 모델링 및 ORM, Raw Query를 섞어가며 개발을 하였습니다. AI 개발자와 서버에 대한 고민을 굉장히 많이 하였습니다. AI를 실행 시키고 진행률을 들고올 때의 문제점을 찾고 가설을 세우면서 파훼법을 찾았으며 서버에 대해서 배우는 계기가 되었습니다.
    </>
  )
}

export default AutomlWeb