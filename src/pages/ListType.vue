<template>
    <h1>Listado Tipos</h1>

    <router-link :to="{ name: 'list-category' }">Categorías</router-link>

    <n-space vertical :size="12">
        <n-space>
            <n-button @click="sortName">Ordenar nombres (Ascendente)</n-button>
            <n-button @click="filterAddress">Filtrar Almacén (ANCASH)</n-button>
            <n-button @click="clearFilters">Limpiar Filtros</n-button>
            <n-button @click="clearSorter">Limpiar orden</n-button>
            <input @input="handleSearchInput($event)" v-model.trim="searchText" placeholder="Buscar" class="input">
        </n-space>

        <n-data-table ref="dataTableInst" :columns="columns" :data="filteredData" :pagination="pagination"
            :row-class-name="rowClassName" />


    </n-space>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

const columns = [
    {
        title: 'Nombre',
        key: 'name',
        sorter: 'default'
    },
    {
        title: 'Stock total',
        key: 'stock',
        sorter: (row1, row2) => row1.stock - row2.stock,
        className: 'stock'
    },
    {
        title: 'Stock Ancash',
        key: 'chinese',
        defaultSortOrder: false,
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3
        }
    },
    {
        title: 'Stock Angaraes',
        defaultSortOrder: false,
        key: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2
        }
    },
    {
        title: 'Stock Real',
        defaultSortOrder: false,
        key: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1
        }
    },
    {
        title: 'Dirección',
        key: 'address',
        filterOptions: [
            {
                label: 'Ancash',
                value: 'ANCASH'
            },
            {
                label: 'Real',
                value: 'REAL'
            }
        ],
        filter(value, row) {
            return ~row.address.indexOf(value)
        }
    }
]

const data = [
    {
        key: 0,
        name: 'Block de Vidrio LINEAL 19x19x8cm',
        stock: 132,
        address: 'ANCASH No. 1 Almacén',
        chinese: 98,
        math: 60,
        english: 70
    },
    {
        key: 1,
        name: 'Chapa Serrucho PHILLIPS',
        stock: 242,
        address: 'ANCASH No. 1 Almacén',
        chinese: 98,
        math: 66,
        english: 89
    },
    {
        key: 2,
        name: 'Garrucha Metinsa con Vena',
        stock: 32,
        address: 'REAL No. 1 Almacén',
        chinese: 98,
        math: 66,
        english: 89
    },
    {
        key: 3,
        name: 'Esquinero Extra',
        stock: 32,
        address: 'ANGARAES No. 2 Almacén',
        chinese: 88,
        math: 99,
        english: 89
    },
    {
        key: 4,
        name: 'Esquinero Extra',
        stock: 32,
        address: 'ANGARAES No. 2 Almacén',
        chinese: 88,
        math: 99,
        english: 89
    },
    {
        key: 5,
        name: 'Esquinero Extra',
        stock: 32,
        address: 'ANGARAES No. 2 Almacén',
        chinese: 88,
        math: 99,
        english: 89
    },
    {
        key: 6,
        name: 'Garrucha Metinsa con Vena',
        stock: 32,
        address: 'REAL No. 1 Almacén',
        chinese: 98,
        math: 66,
        english: 89
    },
    {
        key: 7,
        name: 'Block de Vidrio LINEAL 19x19x8cm',
        stock: 132,
        address: 'ANCASH No. 1 Almacén',
        chinese: 98,
        math: 60,
        english: 70
    }
]

export default defineComponent({
    setup() {
        const dataTableInstRef = ref(null)
        const searchText = ref("")

        const handleSearchInput = (event) => {
            if (event.target) {
                searchText.value = event.target.value;
                console.log("no vale");
            }
        };

        const filteredData = computed(() => {
            if (searchText.value) {
                return data.filter((item) => {
                    const searchTerm = searchText.value.toLowerCase();
                    return Object.values(item).some(
                        (val) => String(val).toLowerCase().includes(searchTerm)
                    );
                });
            } else {
                return data;
            }
        });

        return {
            data,
            columns,
            dataTableInst: dataTableInstRef,
            pagination: ref({ pageSize: 40 }),
            searchText,
            filteredData,
            handleSearchInput,
            filterAddress() {
                dataTableInstRef.value.filter({
                    address: ['ANCASH']
                })
            },
            sortName() {
                dataTableInstRef.value.sort('name', 'ascend')
            },
            clearFilters() {
                dataTableInstRef.value.filter(null)
            },
            clearSorter() {
                dataTableInstRef.value.sort(null)
            },
            rowClassName(row) {
                if (row.stock >= 200) {
                    return "bien";
                } if (row.stock < 200 && row.stock >= 100) {
                    return "regular";
                } if (row.stock < 100) {
                    return "too-old";
                }
                return "";
            }
        }
    }
})
</script>

<style scoped>
:deep(.too-old td) {
    background: rgba(255, 0, 0, 0.55) !important;
}

:deep(.regular td) {
    background: rgba(217, 255, 0, 0.55) !important;
}

:deep(.bien td) {
    background: rgba(9, 255, 0, 0.55) !important;
}

:deep(.too-old .stock) {
    color: rgba(0, 0, 128, 0.75) !important;
}

.input {
    width: 100%;
    max-width: 220px;
    height: 8px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
}

.input:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
}

.input:active {
    transform: scale(0.95);
}

.input:focus {
    border: 2px solid grey;
}
</style>