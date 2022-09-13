class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password') //네트워크에 의존
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}
// 한번 로그인 된후에는 userClient에있는 login을 호출하면 안됨
// 호출했느지 안했는지 행동에 대해서 테스트를 할때는 stub만으로 테스트 구현하기는 어려움
// 이럴 경우, mock을 사용해야됨

module.exports = UserService;
