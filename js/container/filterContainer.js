import { connect } from 'react-redux';
import Filter from '../components/filter';
import { setFilter } from '../action';

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

const mapDispatchToProps = (dispatch) => {
  return { setFilter: (filter) => dispatch(setFilter(filter)) }
}

export default FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)
