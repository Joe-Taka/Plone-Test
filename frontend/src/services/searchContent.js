import { useEffect, useState } from 'react';
import { searchContent } from '@plone/volto/actions';
import { useSelector, useDispatch } from 'react-redux';

export default function getPageContent(path, start_on=0, end_on=25) {

  const dispatch = useDispatch();

  const result = useSelector(
    (state) => state.search.subrequests.content?.items,
  );

  function getContentFn() {
    dispatch(
      searchContent(
        `${path}`,
        {
          b_start: start_on,
          b_size: end_on,
          fullobjects: true,
        },
        'content',
      ),
    );
  }

  useEffect(() => {
    getContentFn();
  }, [dispatch]);

  return result;
}