import { connect } from "react-redux";
import {
  invokeAPI,
  updateCategory,
} from "../store/actioncreators/MainComponentActionCreator";
import {
  getAvailableOptions,
  getFilterList,
} from "../store/selectors/appSelector";
import MainComponent from "../component/MainComponent";

const mapStateToProps = (state) => {
  return {
    selectedCategory: state?.appReducer?.selectedCategory,
    resultList: getFilterList(state),
    availableOptions: getAvailableOptions(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    invokeAPI: () => dispatch(invokeAPI()),
    onCategoryChange: (value) => dispatch(updateCategory(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
