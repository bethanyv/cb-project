import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';


interface MoviePageProps {
}

const MoviePage = () => {
    return (
        <div id="cb-movie-page" className="cb-container cb-title">
            <div className="cd-header">
                <div className='cb-movie-logo'>
                    <FormattedMessage id='movieTitle' defaultMessage="MOVIES"/>
                </div>
            </div>
        </div>
    );
};

export const MoviePageComponent = injectIntl(MoviePage);