import React, { Fragment, useState, useEffect, useRef } from 'react';
import { HiDocumentDuplicate, HiCheck, HiChevronDoubleLeft, HiSave, HiExclamation, HiChevronUp, HiChevronDown, HiViewGrid } from 'react-icons/hi';
import route from 'ziggy';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, Head, usePage } from '@inertiajs/inertia-react';
import Layout from '../../../components/admin/layout';

const Edit = ({ category, parentcategory, categoryTitle, success }) => {

    const { settings, errors } = usePage().props

    const [seccaoOpen, setSeccaoOpen] = useState(false);

    const categorynameRef = useRef();
    const parentcategoryRef = useRef();
    const categorytitleRef = useRef();
    const descricaoRef = useRef();
    const activeRef = useRef();

    useEffect(() => {
        categorynameRef.current.value = category.categoryname;
        parentcategoryRef.current.value = category.parent;
        categorytitleRef.current.value = category.categorytitle;
        descricaoRef.current.value = category.descricao;
        activeRef.current.checked = category.active;
    }, [])

    const updateCategory = (e) => {
        e.preventDefault();
        const categoryname = categorynameRef.current.value;
        const parentcategory = parentcategoryRef.current.value;
        const categorytitle = categorytitleRef.current.value;
        const descricao = descricaoRef.current.value;
        const active = activeRef.current.checked;
        Inertia.put(route('categoria.update', category.id_category), { categoryname, parentcategory, categorytitle, descricao, active });
    };

    return (
        <Fragment>
            <Layout>
                <Head title={settings.title + " - " + categoryTitle} />
                <div className="rounded py-2 px-4 text-gray-900 bg-gray-100 shadow">

                    <div className="p-2 mt-2 flex bg-gray-200 rounded-t-md border border-gray-300">
                        <h1 className="text-2xl text-gray-600 flex items-center">
                            <HiViewGrid /> Categorias
                        </h1>
                    </div>

                    {success &&
                        <div className="flex items-center mt-2 p-2 bg-green-200 border border-green-300 text-gray-600 rounded-md">
                            <span className="mt-1 text-xl"><HiCheck /></span>{success}
                        </div>
                    }

                    <div className="py-4 flex border-b border-gray-300">
                        <InertiaLink
                            as="button"
                            type="button"
                            href={route('categoria.index')}
                            className="flex items-center mb-2 md:mb-0 bg-blue-500 hover:bg-blue-700 px-5 py-2 text-sm shadow-sm border-2 border-white text-gray-100 rounded-lg hover:shadow-lg">
                            <HiChevronDoubleLeft className="text-xl" /> Voltar
                        </InertiaLink>
                    </div>

                    <form onSubmit={updateCategory} className="py-4" autoComplete="off">

                        <div className="w-8/12 pt-2">
                            <label htmlFor=""><span className="text-gray-500">Categoria Pai</span></label>

                            <select
                                ref={parentcategoryRef}
                                className="form-input text-gray-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="parentcategory"
                                placeholder=""
                            >
                                <option value="0">Selecione a categoria pai</option>
                                {parentcategory.map((parent, index) => (
                                    <option key={index} value={parent.id_category}>{parent.categoryname}</option>

                                ))}
                            </select>
                        </div>

                        <div className="w-8/12 pt-2">
                            <label><span className="text-gray-500">Nome da categoria</span></label>
                            <input
                                ref={categorynameRef}
                                type="text"
                                className="form-input text-gray-500 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                id="categoryname"
                                placeholder=""
                            />
                            {errors.categoryname && <div className="p-2 border border-t-0 border-red-200 text-sm flex items-center w-full bg-yellow-100 text-red-500"><HiExclamation className="text-md mt-1" /> {errors.categoryname}</div>}
                        </div>

                        <div className="w-8/12 pt-2">
                            <div className="flex items-center">
                                <input
                                    ref={activeRef}
                                    type="checkbox"
                                    className="form-checkbox text-gray-500 mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    id="active"
                                />
                                <label htmlFor=""><span className="text-gray-500 pl-2">Tornar categoria disponível em menus (categoria pai)</span></label>
                            </div>
                        </div>

                        {/* Adiciona categorias as secções da página inicial*/}
                        <div
                            onClick={() => setSeccaoOpen(!seccaoOpen)}
                            className="mt-4 p-2 cursor-pointer rounded-t bg-gray-200 border border-gray-300 flex justify-left">
                            <span>Preencha caso adicione esta categoria como secção na página inicial ou cabeçalho da categoria</span> {seccaoOpen ? <HiChevronDown className="text-2xl" /> : <HiChevronUp className="text-2xl" />}
                        </div>
                        <div className={"py-4 px-2 border border-gray-300 border-t-0 bg-gray-200 " +
                            (seccaoOpen ? 'block' : 'hidden')
                        }>

                            <div className="w-8/12 pt-2">
                                <label><span className="text-gray-500">Título para a secção ou cabeçalho da categoria</span></label>
                                <input
                                    ref={categorytitleRef}
                                    type="text"
                                    className="form-input text-gray-500 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    id="categorytitle"
                                    placeholder=""
                                />
                                {errors.categorytitle && <div className="p-2 border border-t-0 border-red-200 text-sm flex items-center w-full bg-yellow-100 text-red-500"><HiExclamation className="text-md mt-1" /> {errors.categorytitle}</div>}
                            </div>

                            <div className="w-8/12 pt-2">
                                <label><span className="text-gray-500">Descrição para a secção ou cabeçalho da categoria</span></label>
                                <textarea
                                    ref={descricaoRef}
                                    type="text"
                                    className="form-input text-gray-500 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    id="descricao"
                                    placeholder=""
                                ></textarea>
                                {errors.descricao && <div className="p-2 border border-t-0 border-red-200 text-sm flex items-center w-full bg-yellow-100 text-red-500"><HiExclamation className="text-md mt-1" /> {errors.descricao}</div>}
                            </div>

                        </div>
                        {/* Fim de adiciona secções */}

                        <div className="flex items-center w-full border-t border-gray-300 pt-4 mt-4">
                            <button
                                className="flex items-center md:mb-0 bg-blue-500 hover:bg-blue-700 px-5 py-2 text-sm shadow-sm border-2 border-white text-gray-100 rounded-lg hover:shadow-lg">
                                <HiSave className="text-xl" /> Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </Fragment>
    )
}

export default Edit;
