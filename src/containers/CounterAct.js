import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import Counter from "../components/Counter";

// Глобально все по феншую но в данном случае контейнер и есть сам компонент подключенные к рекдакс
// т.е. перенеси ../components/Counter сюда и экспортируй сразу обернутым

// ДАЛЕЕ ПРОСТО ПО УПРОЩЕНИЮ СИНТАКСИСА С КОТОРЫМ МЫ В ОСНОВНОМ БУДЕМ РАБОТАТЬ
// закоменченный код - твой, после него - более короткий аналог

// const mapStateToProps = state => {
//   return {
//     value: state.countings
//   };
// };

const mapStateToProps = state => ({
  value: state.countings
});

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrementClick: () => {
//       dispatch(increment());
//     },
//     onDecrementClick: () => {
//       dispatch(decrement());
//     }
//   };
// };

// mapDispatchToProps может принимать как функцию с dispatch а может и обьект и тогда обертывание в dispatch будет произведено автоматически

const mapDispatchToProps = {
  onIncrementClick: increment,
  onDecrementClick: decrement
};

// const CounterUse = connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default CounterUse;

// Но я и многие другие предпочитают еще более короткий синтакс всего вместе взятого без mapTo функций
// (если только у проекта нет пунктика на этот счет):

export default connect(
  state => ({
    value: state.countings
  }),
  {
    onIncrementClick: increment,
    onDecrementClick: decrement
  }
)(Counter);
