# KeyboardAvoidingView

인풋 사용할때 인풋창이 키보드 밑으로 숨는 문제 해결하기 위한 View

- ios에서 특히 문제가 되며, behavior 속성을 설정한다. 플랫폼(ios, android)에 따라 조정해야한다

# expo/Constants

[공식문서에서 확인해보기](https://docs.expo.io/versions/v39.0.0/sdk/constants/)
expo-cli에서 제공하는 상수. 화면의 다양한 값을 얻을 수 있다.

- 안드로이드에서 노치(status-bar)부분이 중첩되는 문제를 해결하기위해 expo/constants/statusBarHeight를 이용하자

# expo/AsyncStorage

네이티브에서 스토리지 사용할때 expo에서 지원하는 AsyncStorage를 사용할 수 있다.
다음을 진행하고 사용하자.
기본 사용은 로컬/세션 스토리지와 유사하다.

> [사용법 확인](https://react-native-community.github.io/async-storage/docs/usage/)

1. `yarn add @react-native-community/async-storage` : package 추가
1. `expo install @react-native-community/async-storage` : 엑스포 패키지 추가

# 기타 RN 특징

- RN에는 **체크박스**가 지원되지 않음 : `TouchableXXX` 와 같은 `View`를 사용
- 체크박스를 간단하게 이모지로 사용하기도 함 [이모지피디아](https://emojipedia.org/)에서 디바이스별 이모지 확인가능
