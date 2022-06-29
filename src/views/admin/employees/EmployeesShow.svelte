<script>
  export let currentRoute;
</script>

<!--
  다음과 같이 호출 했을 때 
  http://localhost:8080/admin/employees/show/12222

  router에서 :id로 이름을 정의하였기 때문에 nameParams.id로 꺼낼 수 있다. 
-->
<h1>EmployeesShow {currentRoute.namedParams.id}</h1>

