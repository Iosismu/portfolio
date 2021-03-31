#  Bini's Portfolio by 

포트폴리오 소개 홈페이지를 만드는 프로젝트입니다. <br>
 ⬇ 아래 내용에 프로젝트에대한 내용을 자세히 기술 하였습니다.


# <기본 설정>

## 문자 인코딩(Character Encoding) 설정
문자가 인코딩되는 방식을 설정합니다.

```html
<meta charset="UTF-8"/>
```

## 뷰포트(Viewport) 렌더링 방식 설정
웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.
```html
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Bini" />
  <meta property="og:title" content="Bini's Portfolio" />
  <meta property="og:description" content="Bini's Portfolio" />
  <meta property="og:image" content="./images/flag-south-korea.png" />
  <!-- <meta property="og:url" content="" /> -->
```
[오픈 그래프 속성 보기](https://ogp.me/)


## 트위터 카드(Twitter Cards)
웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.
```html
   <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Bini" />
  <meta property="twitter:title" content="Bini's Portfolio" />
  <meta property="twitter:description" content="Bini's Portfolio" />
  <meta property="twitter:image" content="./images/flag-south-korea.png" />
  <!-- <meta property="twitter:url" content="" /> -->
```
[트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)


## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.

> 파비콘 이미지는 루트 경로에 있어야 합니다!

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```


## Reset.css
각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
[Reset.css](https://www.jsdelivr.com/package/npm/reset-css) Copy HTML

## Google Fonts
페이지에서 사용할 '나눔고딕' 폰트를 지정합니다.

[Google Fonts](https://fonts.google.com/)에서 고른 폰트 파일을 가져옵니다.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```