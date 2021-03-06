import styled from "styled-components";

import theme from "../../context/themes/main";

const { colors } = theme;

export const Layout = styled.div`
    flex: 1;
    width: 100%;

    &.map-view {
        .search {
            span.ant-input-wrapper.ant-input-group {
                background: white;
            }
        }
    }

    .icon-buttons {
        z-index: 999;
        position: fixed;
        right: 2rem;
        bottom: 5rem;
        display: flex;
        flex-direction: column;

        & > *:not(:last-child) {
            margin-bottom: 0.5rem;
        }
    }

    .filter-tags {
        .ant-tag {
            margin-bottom: 1rem;
            padding: 0.1rem 0.5rem;
            border-radius: 1.5rem;
            background: ${colors.primary};
            color: white;

            .ant-tag-close-icon {
                color: white;
            }
        }
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .search-bar {
        width: 100%;
    }

    .filter {
        z-index: 1;
        margin-left: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }
`;