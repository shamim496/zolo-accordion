import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import attributes from './attributes';
import classnames from 'classnames';

import { classArrayToStr } from '@zoloblocks/library';

const deprecated = {
    attributes: {
        ...attributes,
        initialOpen: {
            type: 'string',
            default: '1',
        },
        allowMultiple: {
            type: 'boolean',
            default: false,
        },
    },
    save: ({ attributes }) => {
        const { uniqueId, parentClasses, initialOpen, allowMultiple, zoloId, preset } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(uniqueId, preset, 'zolo-accordion-wrap accordion-container', classArrayToStr(parentClasses)),
        });

        return (
            <div
                {...blockProps}
                data-initialOpen={initialOpen}
                data-multiple={allowMultiple}
                {...(zoloId && {
                    id: zoloId,
                })}
            >
                <InnerBlocks.Content />
            </div>
        );
    },
};

export default deprecated;
