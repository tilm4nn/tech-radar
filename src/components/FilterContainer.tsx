import React from 'react';
import { Typography } from '@material-ui/core';

import Tag from './Tag';

interface IFilterContainerProps<T> {
  caption: string;
  tags: T[];
  selectedTags: T[];
  selectTags: ( tags: T[] ) => void;
  labelAccessor: (tag: T) => string;
}

export class FilterContainer<T> extends React.Component<IFilterContainerProps<T>> {
  render() {
    const {caption, tags, selectedTags, selectTags, labelAccessor} = this.props;
    const tagsComponents = tags.map((tag) => {
      const tagString = labelAccessor(tag);
      return <Tag
        tag={tagString}
        key={tagString}
        isSelected={selectedTags.indexOf(tag) >= 0}
        onClick={() => {
          selectTags([tag]);
        }}
      />
    })
    return (
      <>
        <Typography variant="h6">{caption}:</Typography>
        <Tag
          tag='all'
          onClick={() => {
            selectTags([]);
          }}
          isSelected={selectedTags.length === 0}
        />
        {tagsComponents}
      </>
    );
  }
}
