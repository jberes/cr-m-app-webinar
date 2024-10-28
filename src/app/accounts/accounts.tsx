import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomers } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './accounts.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Accounts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dropdown = useRef<IgrDropdown>(null);
  const newAccountDialog = useRef<IgrDialog>(null);
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('1');
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout accounts-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout header")}>
                <div className={classes("row-layout page-title")}>
                  <div className={classes("row-layout group_3")}>
                    <img src="/src/assets/Accounts%20Icon%20-%20Green.svg" className={classes("image")} />
                  </div>
                  <h6 className={classes("h6")}>
                    <span>Accounts</span>
                  </h6>
                </div>
                <div className={classes("row-layout buttons")}>
                  <IgrButton variant="flat" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>business</span>
                    </span>
                    <span key={uuid()}>New Account</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button button_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                    <span key={uuid()}>Discover companies</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button button_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>import_export</span>
                    </span>
                    <span key={uuid()}>Import</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout filters-and-sorting")}>
                <div className={classes("row-layout group_4")}>
                  <IgrSelect outlined="false" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
                    <IgrSelectItem value="1" key="84aa6def-ff29-4926-a569-2eedff39f81f">
                      <span key={uuid()}>My Accounts</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="93c24a37-a0ac-49bd-a0ba-2a2588b5a71f">
                      <span key={uuid()}>All Accounts</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrInput placeholder="Search accounts" required outlined="false" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
                <div className={classes("row-layout group_5")}>
                  <IgrButton variant="flat" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_5")}>
                    <span key={uuid()}>Recently Updated</span>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Name</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Recently Updated</span>
                    </IgrDropdownItem>
                  </IgrDropdown>
                </div>
              </div>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/account-sample`)}>
              <IgrGrid data={northwindCustomers} primaryKey="contactName" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newAccountDialog}>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <h6 className={classes("h6_1")}>
              <span>New Account</span>
            </h6>
            <div className={classes("column-layout group_7")}>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>ACCOUNT INFORMATION</span>
                </p>
                <div className={classes("row-layout group_9")}>
                  <div className={classes("column-layout group_10")}>
                    <IgrInput label="Account Name" required outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrSelect outlined="false" label="Type" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="70ea51ad-f3ba-4311-b12c-646c8fd7e148">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="6ff4bc1c-7cad-4eba-879a-809f7b2bc758">
                        <span key={uuid()}>Analyst</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="a056556e-f47b-4a51-b8e7-d0af2a8babcd">
                        <span key={uuid()}>Competitor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="6a458717-903b-4490-ad46-60ccbaf8fe2a">
                        <span key={uuid()}>Customer</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="e0efeb84-c869-42d0-9d26-ec9efbaf281f">
                        <span key={uuid()}>Integrator</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="c72adda0-db80-48c3-b8b9-804f46bcad13">
                        <span key={uuid()}>Investor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="ae8ae298-fa1d-4f48-958f-596e436c6dd1">
                        <span key={uuid()}>Partner</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="86b24af1-eda0-4a65-915b-bcf21713aad4">
                        <span key={uuid()}>Press</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="9" key="03fa170d-201b-4ae3-9208-489dd32b49ab">
                        <span key={uuid()}>Prospect</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="10" key="173ffcd0-07a3-4da0-80a6-2ade1aea0301">
                        <span key={uuid()}>Reseller</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="11" key="42625501-8b55-4949-b4ef-7fef01edebb4">
                        <span key={uuid()}>Other</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrInput label="Website" required outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrTextarea label="Description" outlined="false" className={classes("user-input")}></IgrTextarea>
                  </div>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("column-layout group_11")}>
                      <p className={classes("typography__caption text_1")}>
                        <span>Account Owner</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Andrea Silveira</span>
                      </p>
                    </div>
                    <IgrInput label="Parent Account" placeholder="Search Accounts..." required outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="tel" label="Phone" required outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrSelect outlined="false" label="Industry" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="ff8b176b-7545-46ae-b3f5-b81611cfdc40">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="3def1a30-0ba9-4dbb-a6c2-8f27017e9c50">
                        <span key={uuid()}>Agriculture</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="dd615034-fc5c-4446-a7e3-89f88ef1c59a">
                        <span key={uuid()}>Apparel</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="cf59cc5c-8bb4-4771-a221-3f1f1b31c97f">
                        <span key={uuid()}>Banking</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="4ca58ade-f8a8-45e7-8431-50fd6b34efc1">
                        <span key={uuid()}>Biotechnology</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="352629ad-8e39-470d-a27c-b640e7037261">
                        <span key={uuid()}>Chemicals</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="c68689d1-8854-4d2c-8c1e-eed1fd2ef885">
                        <span key={uuid()}>Communications</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="55672769-b9ab-4e49-97e4-6c536d7d0cd2">
                        <span key={uuid()}>Construction</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="false" label="Employees" className={classes("user-input")}>
                      <IgrSelectItem value="1" key="4fa31c2a-cdb1-44d3-addc-7d8b89263d7f">
                        <span key={uuid()}>Self Employed</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="e879cc3d-927f-4aee-995b-1603aa880c95">
                        <span key={uuid()}>1-10</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="61cf3854-513d-4fec-8ddf-74aefdd61c7c">
                        <span key={uuid()}>11-50</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="43f13b8a-3875-45e5-b1ee-086849819768">
                        <span key={uuid()}>51-250</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="d91a6cb5-222b-45f5-b533-7c33dcdc80e3">
                        <span key={uuid()}>+250</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout group_12")}>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>BILLING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" required outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" required outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" required outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" required outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" required outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="b87be5f3-4c65-4a77-9aa7-f507df960b3c">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="926098ef-b33c-4c07-9d21-44b969bbefd9">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="20e426dd-ff59-481d-8c0d-b4cd7336c2f0">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="f7d1becf-f336-498d-a5c6-063b49f472a2">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="cf12b792-247b-461c-9b7a-6fca90c22bd4">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>SHIPPING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" required outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" required outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" required outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" required outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" required outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="fc2a4799-a994-49a2-a72b-49ddefaec05b">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="4ac45bf9-8c16-4d0e-91dc-c96e4807d8e3">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="584d7185-dc0f-41a4-aa15-ba0783689a4b">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="b5d5aded-a552-48f9-9d47-86c258cf7171">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="e0b384c0-168d-4802-920b-b002561e4e83">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Save</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
