import {StoreDescriptor} from '@wordpress/data';

declare global {
    interface Window {
        zoloblocksStore: StoreDescriptor
    }
}