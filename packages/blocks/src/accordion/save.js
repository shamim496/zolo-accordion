import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { applyFilters } from "@wordpress/hooks";
import classnames from "classnames";


import { classArrayToStr } from '@zoloblocks/library';

const Save = (props) => {
  const { attributes } = props;
  // filter hooks for render
  const renderHookBefore = applyFilters(
    "zolo.blocks.render.hook.before",
    [],
    props
  );
  const renderHookAfter = applyFilters(
    "zolo.blocks.render.hook.after",
    [],
    props
  );

  const {
    uniqueId,
    parentClasses,
    initialOpen,
    allowMultiple,
    zoloId,
    preset,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: classnames(
      uniqueId,
      preset,
      "zolo-accordion-wrap accordion-container",
      classArrayToStr(parentClasses)
    ),
  });

  return (
    <div
      {...blockProps}
      {...(initialOpen && {
        "data-initial-open": initialOpen,
      })}
      {...(allowMultiple && {
        "data-multiple": allowMultiple,
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >
      {renderHookBefore && renderHookBefore}
      <InnerBlocks.Content />
      {renderHookAfter && renderHookAfter}
    </div>
  );
};

export default Save;
