/**
 * Created by njz on 2017/4/17.
 */
import { InlineNode } from '../../../core/InlineNode';
import { MarkdownRender } from '../';
export declare class A extends InlineNode<MarkdownRender> {
    render(render: MarkdownRender): Promise<string>;
}
