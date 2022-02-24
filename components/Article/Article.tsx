import React from 'react';

const Article: React.FC = () => {
    return (
        <div className="c-article">
            <div className="c-article__inner">
                <h2>Heading 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sollicitudin tortor in dictum. Aliquam erat volutpat. Aliquam sed ante ac erat efficitur ultricies a sed erat. Ut
                    vitae eleifend nunc. Donec semper vulputate nibh non molestie. Etiam sed venenatis leo. Quisque leo neque, mollis ut scelerisque ut, pulvinar eget dolor. Curabitur posuere
                    fermentum justo, in facilisis mi commodo nec. In hac habitasse platea dictumst.
                </p>
                <h3>Heading 3</h3>
                <p>
                    <a href="/">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. In mollis sollicitudin tortor in dictum. Aliquam erat volutpat. Aliquam sed ante ac erat efficitur
                    ultricies a sed erat. Ut vitae eleifend nunc. Donec semper vulputate nibh non molestie. Etiam sed venenatis leo. Quisque leo neque, mollis ut scelerisque ut, pulvinar eget dolor.
                    Curabitur posuere fermentum justo, in facilisis mi commodo nec. In hac habitasse platea dictumst.
                </p>
                <img src="/images/webdesign.jpg" alt="" />
                <ol>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ol>
                <h4>Heading 4</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sollicitudin tortor in dictum. Aliquam erat volutpat. Aliquam sed ante ac erat efficitur ultricies a sed erat. Ut
                    vitae eleifend nunc. Donec semper vulputate nibh non molestie. Etiam sed venenatis leo. Quisque leo neque, mollis ut scelerisque ut, pulvinar eget dolor. Curabitur posuere
                    fermentum justo, in facilisis mi commodo nec. In hac habitasse platea dictumst.
                </p>
                <img src="/images/webdesign.jpg" alt="" />
                <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
            </div>
        </div>
    );
};

export default Article;
