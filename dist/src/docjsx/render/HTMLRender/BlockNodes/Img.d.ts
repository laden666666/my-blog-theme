/**
 * Created by njz on 2017/4/17.
 */
import { BlockNode } from '../../../core/BlockNode';
import { HTMLRender } from '../';
export declare class Img extends BlockNode<HTMLRender> {
    constructor(node: any);
    render(render: HTMLRender): string;
}
