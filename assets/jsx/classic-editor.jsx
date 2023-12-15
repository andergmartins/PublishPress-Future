import { FutureActionPanelClassicEditor } from './components';
import { createStore } from './data';
import { isGutenbergEnabled } from './utils';
import { createRoot } from '&wp.element';
import { select } from '&wp.data';
import {
    postType,
    isNewPost,
    actionsSelectOptions,
    is12Hour,
    startOfWeek,
    strings,
    taxonomyName,
    postTypeDefaultConfig,
    defaultDate
} from "&config/classic-editor";
import { render } from "&ReactDOM";

if (! isGutenbergEnabled()) {
    const storeName = 'publishpress-future/future-action';

    if (!select(storeName)) {
        createStore({
            name: storeName,
            defaultState: {
                autoEnable: postTypeDefaultConfig.autoEnable,
                action: postTypeDefaultConfig.expireType,
                date: defaultDate,
                taxonomy: postTypeDefaultConfig.taxonomy,
                terms: postTypeDefaultConfig.terms,
            }
        });
    }

    const container = document.getElementById("publishpress-future-classic-editor");

    if (createRoot) {
        createRoot(container).render(
            <FutureActionPanelClassicEditor
                storeName={storeName}
                postType={postType}
                isNewPost={isNewPost}
                actionsSelectOptions={actionsSelectOptions}
                is12Hour={is12Hour}
                startOfWeek={startOfWeek}
                strings={strings}
                taxonomyName={taxonomyName}
            />
        );
    } else {
        render(
            <FutureActionPanelClassicEditor
                storeName={storeName}
                postType={postType}
                isNewPost={isNewPost}
                actionsSelectOptions={actionsSelectOptions}
                is12Hour={is12Hour}
                startOfWeek={startOfWeek}
                strings={strings}
                taxonomyName={taxonomyName}
            />,
            container
        );
    }
}
