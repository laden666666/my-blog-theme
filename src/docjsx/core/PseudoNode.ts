import {Node} from './Node'

export class PseudoNode{

    //用于标记类
    static $$NodeClassID = 'PseudoNode'

    /**
     * 父节点
     * @type {Node}
     */
    node: Node

    /**
     * 父节点
     * @type {Node}
     */
    parentPseudoNode: PseudoNode

    /**
     * 子节点
     * @type {Node[]}
     * @memberof Node
     */
    childPseudoNodes: PseudoNode[] = []

    /**
     * react的虚拟dom对象，私有。不对外开放
     */
    protected content: any

    constructor(content: any, node: Node, parentPseudoNode: PseudoNode){
        //父节点
        this.node = node;
        //父节点
        this.parentPseudoNode = parentPseudoNode;
        //节点对应的dom参数
        this.content = content;
    }

    //增加子节点
    appendChild(node: PseudoNode){
        this.childPseudoNodes.push(node);
        node.parentPseudoNode = this;
    }

    //属性
    get props(){
        return (this.content && this.content.props) || {}
    }

    //标签名称
    get tagName(){
        if(typeof this.content === 'string'){
            return 'string'
        }
        return (this.content && this.content && this.content.type) || ''
    }

    //获得文本
    getText(){
        return typeof this.content === 'string' ? this.content : ''
    }
}