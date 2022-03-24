import React from 'react';
import times from 'lodash/times';
import TickerSlider from '../TickerSlider';
import SplitText from '../SplitText';

export interface SectionHeaderProps {
    title: string;
    scrollText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, scrollText }) => {
    return (
        <div className="c-section-header">
            <div className="c-section-header__ticker">
                <TickerSlider tickerSpeed={2} rightToLeft={false}>
                    {times(10, Number).map((id) => (
                        <span key={`child-${id}`}>{scrollText}</span>
                    ))}
                </TickerSlider>
            </div>
            <div className="c-section-header__inner">
                <div className="c-section-header__heading">
                    <h1 className="heading-large">
                        <SplitText words={title} />
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;
