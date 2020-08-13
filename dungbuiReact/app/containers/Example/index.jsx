// /*
//  * FeaturePage
//  *
//  * List all the features
//  */
// import React, { memo, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';

// import { createStructuredSelector } from 'reselect';
// import { useInjectReducer } from 'utils/injectReducer';
// import { useInjectSaga } from 'utils/injectSaga';

// import H1 from 'components/H1';
// import {
//   makeSelectBlogs,
//   makeSelectError,
//   makeSelectLoading,
// } from './selectors';
// import reducer from './reducer';
// import { connect } from 'react-redux';
// import { loadingBlog, removePost } from './actions';
// import saga from './saga';

// const key = 'blog';
// function BlogIndex({ loading, error, blogs, loadingBlog, removePost }) {
//   useInjectReducer({ key, reducer });
//   useInjectSaga({ key, saga });

//   useEffect(() => {
//     loadingBlog();
//   }, []);
//   if (loading) {
//     return <p>loading</p>;
//   }
//   if (error) {
//     alert(error);
//   }

//   function removePostHandle(id) {
//     removePost(id);
//   }
//   return (
//     <div>
//       <Helmet>
//         <title>Blog Page</title>
//         <meta
//           name="description"
//           content="Feature page of React.js Boilerplate application"
//         />
//       </Helmet>
//       <H1>Blog</H1>
//       <ListBlog data={blogs} removePost={removePostHandle} />
//     </div>
//   );
// }
// BlogIndex.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   blogs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   loadingBlog: PropTypes.func,
//   removePost: PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
//   blogs: makeSelectBlogs(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     loadingBlog: () => dispatch(loadingBlog()),
//     removePost: id => dispatch(removePost(id)),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(BlogIndex);

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeselectExs, makeSelectLoading, makeSelectError } from './selectors';
import { callFolk } from './actions';

import saga from './saga';
const key = 'example';
function ExampleIndex(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  //Define props
  const { callFolk } = props;
  useEffect(() => {
    callFolk();
  }, []);

  return (
    <div className="coverExample">
      <Helmet>
        <title>Example Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>

      <p>Example Page</p>
    </div>
  );
}

ExampleIndex.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  example: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  callFolk: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  example: makeselectExs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    callFolk: () => dispatch(callFolk()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ExampleIndex);
