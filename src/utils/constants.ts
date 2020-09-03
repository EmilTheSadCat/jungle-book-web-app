import { SortBy } from '@/store/modules/settings';

export const positionOptions = [
    {
        name: 'full',
        label: 'Full Sun',
        id: 0,
    },
    {
        name: 'partial',
        label: 'Partial Sun',
        id: 1,
    },
    {
        name: 'shady',
        label: 'Shady',
        id: 2,
    },
];

export const emptyPlantFormData = {
    name: '',
    scientific_name: '',
    description: '',
    temperature: [0, 35],
    positionId: 0,
};

export const possibleSortOptions = {
    [SortBy.A_Z]: {
        name: 'aZ',
        label: 'A - Z',
        id: SortBy.A_Z,
    },
    [SortBy.Z_A]: {
        name: 'zA',
        label: 'Z - A',
        id: SortBy.Z_A,
    },
    [SortBy.LAST_WATERED]: {
        name: 'lastWatered',
        label: 'Last watered',
        id: SortBy.LAST_WATERED,
    },
    [SortBy.LAST_DEWED]: {
        name: 'lastDewed',
        label: 'Last dewed',
        id: SortBy.LAST_DEWED,
    },
};