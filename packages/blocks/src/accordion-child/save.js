import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";


import { classArrayToStr, DisplayZoloIcon } from '@zoloblocks/library';

const Save = ({ attributes }) => {
  const {
    uniqueId,
    title,
    titleTag,
    parentClasses,
    collapseIcon,
    expandIcon,
    zoloId,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: classnames(
      uniqueId,
      "zolo-accordion-item ac",
      classArrayToStr(parentClasses)
    ),
  });

  return (
    <div
      {...blockProps}
      {...(zoloId && {
        id: zoloId,
      })}
    >
      <button type="button" className="ac-trigger zolo-accordion-head-item">
        <RichText.Content
          tagName={titleTag}
          className="zolo-accordion-head-title"
          value={title}
        />
        <div className="zolo-accordion-toggle">
          <div className="zolo-accordion-collapsed-mode">
            {collapseIcon && <DisplayZoloIcon icon={collapseIcon} />}
          </div>
          <div className="zolo-accordion-expanded-mode">
            {expandIcon && <DisplayZoloIcon icon={expandIcon} />}
          </div>
        </div>
      </button>
      <div className="zolo-accordion-panel ac-panel">
        <div className="zolo-accordion-inner">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};

export default Save;
